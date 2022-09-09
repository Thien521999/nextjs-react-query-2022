import { Create, FilterForm, Modal, SearchForm } from '@components'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Header.module.css'

export const Header = () => {
	const [openSearch, setOpenSearch] = useState(false)
	const [openFilter, setOpenFilter] = useState(false)
	const [openProduct, setOpenProduct] = useState(false)

	const handleClose = () => {
		setOpenProduct(false)
	}

	const handleCloseSearch = () => {
		setOpenSearch(false)
	}

	const handleCloseFilter = () => {
		setOpenFilter(false)
	}

	return (
		<header className={styles.header}>
			<nav>
				<p>
					<Link href="/">
						<a>Home</a>
					</Link>
				</p>
				<p onClick={() => setOpenProduct(true)}>Create Product</p>
				<p onClick={() => setOpenSearch(true)}>Search</p>
				<p onClick={() => setOpenFilter(true)}>Filter</p>
			</nav>

			{/* -------- Product --------- */}
			{openProduct && (
				<Modal
					titleTxt="Create Product"
					open={openProduct}
					handleClose={handleClose}
				>
					<Create />
				</Modal>
			)}

			{/* Modal Search */}
			{openSearch && (
				<Modal titleTxt="Search" open={openSearch} handleClose={handleCloseSearch} >
					<SearchForm />
				</Modal>
			)}

			{/* Modal Filter */}
			{openFilter && (
				<Modal titleTxt="Filter" open={openFilter} handleClose={handleCloseFilter}>
					<FilterForm />
				</Modal>
			)}

			{/* Modal Product */}
			{/* {openProduct && (
				<Modal titleTxt="Create Product" setOpen={setOpenProduct}>
					<ProductForm btnTxt="Add" />
				</Modal>
			)} */}
		</header>
	)
}
