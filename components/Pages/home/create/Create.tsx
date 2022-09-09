import { CreateForm } from '../create-form/CreateForm';
import React from 'react'
import { formCreate } from '@models';

export const Create = () => {
  const handleSubmit = (values: formCreate) => {
    console.log(values)
  }
  return (
    <CreateForm onSubmit={handleSubmit}/>
  )
}