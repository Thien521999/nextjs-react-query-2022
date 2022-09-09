import { LazyLoadImg } from '@components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import { deleteProduct, handleError } from "../api/productAPI";
// import useLazyLoading from "../hooks/useLazyLoading";
// import useMutation from '../hooks/useMutation';
import { useMutation, useQueryClient } from 'react-query'
// import LazyLoadImg from './LazyLoadImg'
// import Modal from "./Modal";
// import ProductForm from "./ProductForm";
// import { toast } from "react-toastify";
import styles from './ProductCard.module.css'

export const ProductsCard = ({ product }: any) => {
  const router = useRouter()

  const [openProduct, setOpenProduct] = useState(false)

  //   const queryClient = useQueryClient();

  //   const { mutate, isLoading } = useMutation(deleteProduct, {
  //     onSuccess: () => toast.success("Delete Product Success!!"),
  //     onError: (err) => handleError(err),
  //     onSettled: () => queryClient.invalidateQueries({
  //       predicate: query => query.queryKey.startsWith('/products')
  //     })
  //   });

  // const { ref } = useLazyLoading();

  //   const handleDelete = (id) => {
  //     if (window.confirm("Do you want to delete this?")) {
  //       mutate(id);
  //     }
  //   };

  const handleClickProduct = () => {
    router.push(
      {
        pathname: '/productDetails',
        query: {
          productId: product?._id,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div
      className={styles.card}
      // onClick={() => router.push(`/products/${product?._id}`)}
      onClick={handleClickProduct}
    >
      {/* <Link href={`/products/${product._id}`} passHref> */}
      <LazyLoadImg url={product?.image} />
      {/* </Link> */}

      <div className={styles.box}>
        <h3>
          <Link href={`/products/${product?._id}`}>
            <span>{product?.title}</span>
          </Link>
        </h3>
        <h4>${product?.price}</h4>

        <div className={styles.btn_div}>
          <button className={styles.btn_edit} onClick={() => setOpenProduct(true)}>
            Edit
          </button>

          <button
            className={styles.btn_delete}
            // disabled={isLoading}
            // onClick={() => handleDelete(product._id)}
          >
            {/* {isLoading ? "Loading..." : "Delete"} */}
            Delete
          </button>
        </div>
      </div>

      {/*--------------- Product Form--------- */}
      {/* {openProduct && (
        <Modal titleTxt="Update Product" setOpen={setOpenProduct}>
          <ProductForm btnTxt="Update" data={product} />
        </Modal>
      )} */}
    </div>
  )
}
