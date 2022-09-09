// import React, { useMemo, useContext, useRef, useState } from "react";
// import { useLocation  } from "react-router-dom";

// export interface Props {
//   page?: number
//   sort?: string
//   cache: any
//   refetching: any 
//   setRefetching: any
// }

// export const Store = React.createContext<Props|null>(null)

// export const useMyContext = () => useContext(Store)

// export const ContextProvider = ({children}:any) => {
//   const { search } = useLocation()

//   const cache = useRef({})
//   const [refetching, setRefetching] = useState(false)

//   const { page, sort } = useMemo(() => {
//     const page = new URLSearchParams(search).get('page') || 1;
//     const sort = new URLSearchParams(search).get('sort') || '-createdAt';
//     return { 
//       page: Number(page),
//       sort: sort
//     }
//   }, [search])


//   const value = { page, sort, cache, refetching, setRefetching };

//   return (
//     <Store.Provider value={value}>
//       {/* <Store.Consumer>
//         { value => <h3>Consumer: {value.page}</h3> }
//       </Store.Consumer> */}
//       {children}
//     </Store.Provider>
//   )
// }