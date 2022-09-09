import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import styles from './FilterForm.module.css'

export const FilterForm = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const inputRef: any = useRef()
  const selectRef: any = useRef('lt')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const value = inputRef.current.value
    const option = selectRef.current.value

    if (!value.trim()) return
    return router.push(
      {
        pathname: '/filter',
        query: {
          option,
          value,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div className={styles.filter_form} title="Enter to filter">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Please enter number" required ref={inputRef} />

          <select ref={selectRef}>
            <option value="lt" title="lesser than">
              LT
            </option>
            <option value="lte" title="lesser than or equal">
              LTE
            </option>
            <option value="gt" title="greater than">
              GT
            </option>
            <option value="gte" title="greater than or equal">
              GTE
            </option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
