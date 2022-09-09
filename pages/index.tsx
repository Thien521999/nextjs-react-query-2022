import { MainLayout, Products, Sorting } from '@components'
import { NextPageWithLayout } from '@models'
import Pagination from '@mui/material/Pagination'
import { getData } from 'api/productApi'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const queryClient = useQueryClient()
  console.log(queryClient)

  const limit = 5
  const page = Number(router.query.page) || 1
  const sort = router?.query?.sort || '-createdAt'

  const key = `/products?limit=${limit}&page=${page}&sort=${sort}`
  //   save data in cache
  queryClient.setQueryData('keys', { k1: key, k2: '' })

  const { data, isFetching, error, isPreviousData, isLoading } = useQuery(key, getData, {
    keepPreviousData: true, //qua trang # quay lai trang ko goi lai api
    cacheTime: 0, // data  dc luu tru trong cache
  })

  // useMemo se chay cung luc vs mount(luc khoi tao)
  const totalPages = useMemo(() => {
    if (!data?.count) return 0

    return Math.ceil(data?.count / limit)
  }, [data?.count, limit])

  const handlePaginationChange = (e: any, value: any) => {
    router.push(
      {
        pathname: '/',
        query: {
          page: Number(value) || 1,
          sort,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className={styles.container}>
      <Sorting page={page} sort={sort} />
      <div className="products">
        {isPreviousData && isFetching ? (
          <p style={{ textAlign: 'center' }}>Loading...</p>
        ) : (
          data?.products && <Products products={data?.products} />
        )}
      </div>
      {isLoading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      <div className={styles.pagination}>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={page}
          color="secondary"
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
