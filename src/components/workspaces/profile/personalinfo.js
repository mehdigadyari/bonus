import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './personalinfo.styles'

export default function Personalinfo({ person }) {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      <Grid container item lg={9} className={classes.infoGrid}>
        <Grid item xs={4} md={6}>
          <Typography color="textPrimary">نام : {person.name}</Typography>
          <Typography color="textPrimary">
            سابقه کاری : {person.experiencetime}
          </Typography>
          <Typography color="textPrimary">بخش : {person.part}</Typography>
          <Typography color="textPrimary">سمت : {person.position}</Typography>
          <Typography color="textPrimary">
            سابقه بیمه : {person.insurance}
          </Typography>
        </Grid>
        <Grid item xs={8} md={6}>
          <Typography color="textPrimary">
            زمان آخرین ورود : {person.lastentreetime}
          </Typography>
          <Typography color="textPrimary">
            زمان آخرین خروج : {person.lasteexittime}
          </Typography>

          <Typography color="textPrimary">
            باقی مانده مرخصی : {person.restleavetime}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item lg={3} className={classes.imgGrid}>
        <img src={person.img} alt={person.name} className={classes.img} />
      </Grid>
    </Grid>
  )
}
