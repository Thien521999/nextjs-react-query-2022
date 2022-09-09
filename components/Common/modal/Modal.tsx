import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import styles from './Modal.module.css'

export interface Props {
	titleTxt: string
	open: boolean
	handleClose: () => void
	children: any
}

export const Modal = ({ titleTxt, open, handleClose, children }: Props) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<span className={styles.close} onClick={handleClose}>
				<DisabledByDefaultIcon />
			</span>
			<div className={styles.titleTxt}>{titleTxt}</div>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	)
}
