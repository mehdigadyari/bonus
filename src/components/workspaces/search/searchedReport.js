import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './searchedReport.styles'

export default function SearchedReport({ report }) {
  const classes = useStyles()

  return (
    <Grid container lg={4} className={classes.root}>
      <Grid className={classes.titleGrid}>
        <Typography>{report.title}</Typography>
      </Grid>
      <Grid className={classes.textGrid}>
        <Typography>{report.text}</Typography>
      </Grid>
    </Grid>
  )
}
