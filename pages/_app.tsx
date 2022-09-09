import { CacheProvider, ThemeProvider } from '@emotion/react'
import { AppPropsWithLayout } from '@models'
import CssBaseline from '@mui/material/CssBaseline'
import { createEmotionCache, theme } from '@utils'
import { QueryClient, QueryClientProvider } from 'react-query'
import { EmptyLayout } from '../components/Layout/Empty'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 60 * 1000,
      },
    },
  })

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default MyApp
