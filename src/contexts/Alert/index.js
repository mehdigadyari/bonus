/* eslint-disable no-console */
import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function Index({ open, setOpen, message, type }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={(event, reason) => {
        if (reason === 'clickaway') {
          return
        }
        setOpen(false)
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  )
}
