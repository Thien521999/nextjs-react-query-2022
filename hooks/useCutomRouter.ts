// import React from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'

// export interface Props {
//     page: number
//     sort: ''
// }

// export const useCustomRouter = () => {
//   const navigate = useNavigate()
//   const { pathname } = useLocation()

//   const pushQuery = ({ page, sort }:Props) => {
//     const query: any = {};

//     if(page) query.page = page;
//     if(sort) query.sort = sort;

//     const newQuery = new URLSearchParams(query).toString()
//     navigate(`${pathname}?${newQuery}`)
//   }

//   return { pushQuery }
// }