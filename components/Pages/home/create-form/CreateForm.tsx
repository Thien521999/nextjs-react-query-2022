import { InputField } from '@components'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from './CreateForm.module.css'
import { formCreate } from '@models'
import { Stack } from '@mui/material'

export interface CreateFormProps {
	onSubmit: (value: any) => void
}

export const CreateForm = ({ onSubmit }: CreateFormProps) => {
	const schema = yup.object().shape({
		title: yup.string(),
		description: yup.string(),
		price: yup.string(),
		category: yup.string(),
		image: yup.string(),
	})

	const {
		reset,
		watch,
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			title: '',
			description: '',
			price: '',
			category: '',
			image: '',
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const handleSubmits: any = async (values: formCreate) => {
		if (onSubmit) {
			await onSubmit(values)
		}
		reset()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(handleSubmits)}>
			{/* <Stack mt={2.5}> */}
				<InputField name="title" errors={errors} control={control} width="100%" />
			{/* </Stack> */}
			<Stack mt={2.5}>
				<InputField name="description" errors={errors} control={control} width="100%" />
			</Stack>
			<Stack mt={2.5}>
				<InputField name="price" errors={errors} control={control} width="100%" />
			</Stack>
			<Stack mt={2.5}>
				<InputField name="category" errors={errors} control={control} width="100%" />
			</Stack>
			<Stack mt={2.5}>
				<InputField name="image" errors={errors} control={control} width="100%" />
			</Stack>
			<button
				type="submit"
				disabled={!isValid}
				className={isValid ? styles.btnCreate : styles.btnCreateDisable}
			>
				Create
			</button>
		</form>
	)
}
