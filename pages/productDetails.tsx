import { MainLayout, ProductInfo } from '@components'
import { getData } from 'api/productApi'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'

const ProductDetail = () => {
  const router = useRouter()
  const id = router.query.productId

  const queryClient = useQueryClient()
  console.log(queryClient)
  const keys = queryClient.getQueryData('keys')
  console.log(keys)

  const key = `products/${id}`
  const {
    data: product,
    isLoading,
    error,
  }: any = useQuery<any[], Error>(key, getData, {
    enabled: !!id,
  })

  return (
    <div>
      {isLoading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <ProductInfo product={product} />
      )}
      {error && <p>{error}</p>}
    </div>
  )
}

ProductDetail.Layout = MainLayout

export default ProductDetail
