import { Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './IconTitle.styles'

export default function IconTitle({ icon, title }) {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.imgDiv}>
        <img src={icon} alt="سرویس" className={classes.img} />
      </Grid>
      <Grid className={classes.titleDiv}>{title} </Grid>
    </Grid>
  )
}
