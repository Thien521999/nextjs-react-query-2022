import { LazyLoadImg } from '@components'
import { product } from '@models'
import React from 'react'
import styles from './ProductInfo.module.css'

export interface IProductInfoProps {
	product: product
}

export const ProductInfo = ({ product }: IProductInfoProps) => {
	return (
		<div className={styles.product_info}>
			<LazyLoadImg url={product?.image} />
			<div className={styles.box}>
				<h2>{product?.title}</h2>
				<h3>${product?.price}</h3>
				<p>{product?.description}</p>
				<h4>Category: {product?.category}</h4>
				<button>Add to cart</button>
			</div>
		</div>
	)
}
