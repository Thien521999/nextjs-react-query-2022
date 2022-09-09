import { getInfiniteData } from 'api/productApi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import { MainLayout, Products, Sorting } from '../components'
import { useInview } from '../hooks/useInview'
import { IUseInviewProps } from './search'

const Filter = () => {
  const limit = 2
  const router = useRouter()

  const { inview, ref }: IUseInviewProps= useInview()
  const page = Number(router.query.page) || 1
  const sort = router?.query?.sort || '-createdAt'
  const value = router?.query?.value
  const option = router.query.option

  // const queryClient = useQueryClient()


  const key = `/products?price[${option}]=${value}&sort=${sort}&limit=${limit}`

  // queryClient.setQueryData('keys', {k1: '', k2: key});

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
    key,
    getInfiniteData,
    {
      getNextPageParam: (lastPage, pages) => {
        const { products } = lastPage
        if (products.length >= limit) {
          return pages.length + 1
        } else {
          return undefined
        }
      },
    }
  )

  // isFetchingNextPage lan dau tien la false ko thuc hien, tu lan thu hai moi thuc hien
  useEffect(() => {
    if (inview && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inview, fetchNextPage, isFetchingNextPage])

  return (
    <>
      <Sorting page={page} sort={sort} />
      {data?.pages[0]?.count > 0 ? (
        <div className="products">
          {data?.pages.map((page: any, index: any) => (
            <Products key={index} products={page?.products} />
          ))}
        </div>
      ) : (
        <div className="noText">Can not find product</div>
      )}
      {isFetching && <p style={{ textAlign: 'center' }}>Loading...</p>}
      <button
        className="btn-load_more"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        ref={ref}
      >
        Load more
      </button>
    </>
  )
}

Filter.Layout = MainLayout
export default Filter
