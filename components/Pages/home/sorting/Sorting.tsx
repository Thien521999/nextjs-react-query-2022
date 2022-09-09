// import { useCustomRouter } from '@hooks'
// import { useMyContext } from 'context/store'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Sortting.module.css'

export interface IProps {
  page: number;
  sort: string | string[];
}

export const Sorting = ({ page, sort }: IProps) => {
	const router = useRouter()

	const handleSort = (e: any) => {
		const { value } = e.target
		router.push(
			{
				pathname: '/',
				query: {
					page,
					sort: value,
				},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<div className={styles.sorting}>
			<select onChange={handleSort} value={sort}>
				<option value="-createdAt">Newest</option>
				<option value="createdAt">Oldest</option>
				<option value="-price">Price: Hight-Low</option>
				<option value="price">Price: Low-Hight</option>
			</select>
			<h2>&#8678;Sort</h2>
		</div>
	)
}

export default Sorting
