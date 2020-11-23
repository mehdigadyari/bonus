import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './title.styles'

export default function Title({ title }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
    </div>
  )
}
