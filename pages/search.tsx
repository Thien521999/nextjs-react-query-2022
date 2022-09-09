import { useInview } from '@hooks'
import { getInfiniteData } from 'api/productApi'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import { MainLayout, Products, Sorting } from '../components'

export interface IUseInviewProps {
  ref: any
  inview: boolean
}

const Search = () => {
  const router = useRouter()
  const limit = 2

  const { ref, inview }: IUseInviewProps = useInview()

  const page = Number(router.query.page) || 1
  const sort = router?.query?.sort || '-createdAt'
  const value = router?.query?.value

  const queryClient = useQueryClient()
  const keys = queryClient.getQueryData('keys')
  console.log(keys)

  const key = `/products?search=${value}&sort=${sort}&limit=${limit}`

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
    <div>
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
    </div>
  )
}

Search.Layout = MainLayout

export default Search
