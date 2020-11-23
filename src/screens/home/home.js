/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Grid, TextField, Typography, Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment-jalaali'
import pholiday from 'pholiday'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { useHistory } from 'react-router-dom'
import useStyles from './home.styles'
import bonsImg from '../../assets/images/bons.png'
import Footer from '../../components/footer/footer'
import { LoginContext } from '../../contexts/LoginContext'
import { AuthenticateContext } from '../../contexts/AuthnticateContext'
import { AlertContext } from '../../contexts/Alert/AlertContext'

import {
  SIGNUP,
  FORGET_PASSWORD,
  EXIT_REPORT,
  LOGIN_TIME,
  LOGIN
} from '../../constants/ActionTypes'
import { TimeContext } from '../../contexts/TimeContext'

export default function Home() {
  const classes = useStyles()
  const { showErrorAlert, showSuccessAlert } = useContext(AlertContext)
  const { dispatch } = useContext(LoginContext)
  const { state, dispatchT } = useContext(TimeContext)
  const { stateA, dispatchA } = useContext(AuthenticateContext)
  const [time, setTime] = useState(new Date())
  const [phoneNum, setPhoneNum] = useState('')
  const [phoneNumError, setPhoneNumError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const history = useHistory()

  const r = moment().locale('en').format('jYYYY/jM/jD')
  const [date, setDate] = useState(pholiday(r, 'jYYYY/jM/jD'))

  useEffect(() => {
    if (state.logInTime) {
      if (stateA.isLogin) {
        showSuccessAlert('شما با موفقیت وارد شدید')
      } else {
        showErrorAlert('کاربری با این مشخصات یافت نشد!')
      }
    }
    setDate(pholiday(r, 'jYYYY/jM/jD'))
    setInterval(() => {
      setTime(new Date())
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateA.thisUser])

  const phoneNumRegex = /^09\d{9}$/

  const enterClick = () => {
    if (!phoneNumRegex.test(phoneNum)) {
      setPhoneNumError('فرمت شماره تلفن صحیح نیست')
    } else if (password.length < 8) {
      setPasswordError('رمز عبور حداقل باید 8 کاراکتر باشد')
    } else {
      const user = { phone: phoneNum, password }
      dispatchA({ type: LOGIN, user })
      dispatchT({ type: LOGIN_TIME })
    }
  }

  const exitClick = () => {
    if (state.logInTime) {
      if (time - state.logInTime > 1000 * 60 * 10) {
        showSuccessAlert('ثبت خروج با موفقیت انجام شد')
        setTimeout(() => {
          dispatch({ type: EXIT_REPORT })
        }, 3000)
      } else {
        showErrorAlert(
          ' هنوز از ورود شما کمتر از 10 دقیقه گذشته است! نمی توانید ثبت خروج کنید'
        )
      }
    }
  }

  return (
    <Grid className={classes.root}>
      <img src={bonsImg} alt="bonus" className={classes.img} />
      <Grid container item className={classes.topGrid}>
        <Grid className={classes.inputGrid}>
          <Typography variant="body2">تلفن همراه:</Typography>
          <TextField
            variant="filled"
            fullWidth
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            error={phoneNumError.length > 0}
            helperText={phoneNumError}
            inputProps={{
              onFocus: () => {
                setPasswordError('')
                setPhoneNumError('')
              }
            }}
            size="small"
            dir="ltr"
            className={classes.textField}
          />
          <Typography variant="body2">رمز عبور:</Typography>

          <TextField
            type="password"
            variant="filled"
            size="small"
            dir="ltr"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError.length > 0}
            helperText={passwordError}
            inputProps={{
              onFocus: () => {
                setPasswordError('')
                setPhoneNumError('')
              }
            }}
            className={classes.textField}
          />
        </Grid>
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              className={classes.RGroup}
              defaultValue="دورکار"
            >
              <FormControlLabel
                labelPlacement="top"
                value="دورکار"
                control={<Radio />}
                label="دورکار"
              />
              <FormControlLabel
                labelPlacement="top"
                value="در محل"
                control={<Radio />}
                label="در محل"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.buttondiv}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={enterClick}
            disabled={date.isHoliday()}
          >
            {localStorage.getItem('isLogin') === 'true' ? (
              <Typography
                color="textSecondary"
                onClick={() => history.push('/workspace')}
              >
                پروفایل
              </Typography>
            ) : (
              <Typography color="textSecondary">ورود</Typography>
            )}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={exitClick}
            disabled={localStorage.getItem('isLogin') === 'false'}
          >
            <Typography color="textSecondary">خروج </Typography>
          </Button>
        </div>
      </Grid>

      <Grid className={classes.buttonGrid}>
        <Button
          variant="text"
          color="secondary"
          size="medium"
          onClick={() => dispatch({ type: SIGNUP })}
        >
          قبلا ثبت نام نکرده ام!
        </Button>
        <Button
          variant="text"
          color="secondary"
          size="medium"
          onClick={() => dispatch({ type: FORGET_PASSWORD })}
        >
          رمز عبور را فراموش کرده ام
        </Button>
      </Grid>

      <Footer />

      <div className={classes.moment}>
        <Typography>
          امروز {moment().format('jD jMMMM jYYYY [ساعت]  HH:mm:ss')}
          {moment.loadPersian({ usePersianDigits: true })}
        </Typography>
        {date.isHoliday() ? (
          <Typography> امروز تعطیل است.امکان ثبت ورود میسر نیست!</Typography>
        ) : null}
      </div>
    </Grid>
  )
}
