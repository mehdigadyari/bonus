/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Personalinfo from './personalinfo'
import useStyles from './profile.styles'
import personImg from '../../../assets/images/profileimg.jpg'
// import { AuthenticateContext } from '../../../contexts/AuthnticateContext'

export default function Profile() {
  // const { stateA } = useContext(AuthenticateContext)
  const classes = useStyles()
  const [name, setName] = useState('')
  const history = useHistory()
  const person = {
    name,
    img: personImg,
    experiencetime: '10',
    part: 'بحشIT',
    position: 'برنامه نویس',
    insurance: '5سال',
    lastentreetime: '99/8/28  7:18:41',
    lasteexittime: '99/8/28  16:08:24',
    restleavetime: '16 روز'
  }
  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem('isLogin'))
    if (isLogin) {
      setName(JSON.parse(localStorage.getItem('thisUser')).name)
    } else {
      history.push('/')
    }
  }, [name])

  return (
    <Grid className={classes.root}>
      <Personalinfo person={person} />
    </Grid>
  )
}
