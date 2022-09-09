import { Footer, Header } from '@components'
import { LayoutProps } from '@models'
import { Box, Stack } from '@mui/material'
import React from 'react'
import styles from './Main.module.css'

export const MainLayout = ({ children }: LayoutProps) => {
	return (
		<Stack minHeight="100vh">
            <Header />
			<Box component="main" flexGrow={1} className={styles.main}>
				{children}
			</Box>
            <Footer />
		</Stack>
	)
}
