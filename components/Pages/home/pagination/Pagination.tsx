import React from 'react';
// import { usePagination } from '../../hooks/usePagination';
import styles from './Pagination.module.css';

// export interface Props {
  // totalPages: number;
// }

export const Pagination = () => {
  // const { firstArr, lastArr, isActive, prev, next, jump } = usePagination(totalPages);

  return (
    <div className={styles.pagination}>
      AAAAAA
      <button 
      // onClick={prev}
      >&laquo;</button>
      {/* {firstArr.map((num) => (
        <button key={num} className={`${isActive(num)}`} onClick={() => jump(num)}>
          {num}
        </button>
      ))} */}

      {/* {lastArr.length > 0 && <button>...</button>} */}
      <button>...</button>

      {/* {lastArr.map((num) => (
        <button key={num} className={`${isActive(num)}`} onClick={() => jump(num)}>
          {num}
        </button>
      ))} */}
      <button 
      // onClick={next}
      >&raquo;</button>
    </div>
  );
};
