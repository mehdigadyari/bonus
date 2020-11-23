import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import useStyles from './masterlayout.styles'
import Routs from '../routes/routs'
import LogInModals from '../components/LoginModals/LogInModals'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Routs />
      </div>
      <LogInModals />
    </BrowserRouter>
  )
}
