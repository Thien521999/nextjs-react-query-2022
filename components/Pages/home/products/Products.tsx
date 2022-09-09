import React from 'react'
import { ProductsCard } from '@components'
import styles from './Product.module.css'

export interface IProductsProps {
	products: any;
}

export const Products = ({ products }: IProductsProps) => {
	return (
		<>
			{products?.map((product: any) => (
				<ProductsCard key={product?._id} product={product} />
			))}
		</>
	)
}
