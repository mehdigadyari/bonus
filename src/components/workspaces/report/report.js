/* eslint-disable no-console */
import React, { useContext, useState } from 'react'

import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import useStyles from './report.styles'
import { ReportContext } from '../../../contexts/ReportContext'
import { AlertContext } from '../../../contexts/Alert/AlertContext'
import { ADD_REPORT } from '../../../constants/ActionTypes'

export default function Report() {
  const classes = useStyles()
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const { dispatch } = useContext(ReportContext)
  const { showSuccessAlert } = useContext(AlertContext)

  const add = () => {
    const report = { title, text }
    dispatch({ type: ADD_REPORT, report })
    showSuccessAlert('گزارش شما با موفقیت ثبت شد')
  }
  return (
    <div className={classes.root}>
      <Typography>عنوان گزارش:</Typography>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="outlined-multiline-static"
        variant="outlined"
        className={classes.reportTitleTextfield}
        color="primary"
      />
      <Typography>گزارش خود را بنویسید:</Typography>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="outlined-multiline-static"
        multiline
        rows={10}
        variant="outlined"
        className={classes.reportTextfield}
        color="primary"
      />
      <div className={classes.button}>
        <Button variant="outlined" onClick={add}>
          <Typography>ثبت گزارش</Typography>
        </Button>
      </div>
    </div>
  )
}
