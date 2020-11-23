import { Container, Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './footer.styles'
import IconTitle from '../IconTitle.js/IconTitle'
import HoursIcon from '../../assets/images/Hours.svg'

export default function Footer() {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container direction="column">
      <Container maxWidth="lg">
        <Grid container direction="row" className={classes.topGrid}>
          <Grid item container md={12} xs={12}>
            <IconTitle icon={HoursIcon} title="پشتیبانی 24 ساعته" />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}
