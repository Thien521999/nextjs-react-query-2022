import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './SearchForm.module.css';

type Props = {};

export const SearchForm = (props: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  // const navigate = useNavigate();

  const inputRef: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const value = inputRef.current.value;
    // if(!value.trim()) return;

    console.log(value);

    return router.push(
      {
				pathname: '/search',
				query: {
					value
				},
			},
			undefined,
			{ shallow: true }
		)
  };

  return (
    <div className={styles.search_form}>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Search</button>
      </form>
    </div>
  );
};
