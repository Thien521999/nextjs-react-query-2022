/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'
import styles from './LazyLoadImg.module.css'

export const LazyLoadImg = ({ url }: any) => {
	const imgRef: any = useRef()

	useEffect(() => {
		const img: any = imgRef.current

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				img.setAttribute('src', url)
				img.classList.add('active')
			}
		})

		if (img) observer.observe(img)

		return () => {
			if (img) observer.unobserve(img)
		}
	}, [url])

	return <img alt={url} ref={imgRef} className={styles.lazy_load} />
}
