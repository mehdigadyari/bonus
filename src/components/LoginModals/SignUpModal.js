/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { Button, Grid, Modal, TextField, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import useStyles from './SignUpModal.Style'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNIN, REGISTER, CODE } from '../../constants/ActionTypes'
import { AuthenticateContext } from '../../contexts/AuthnticateContext'

export default function SignUpModal() {
  const classes = useStyles()
  const { state, dispatch } = useContext(LoginContext)
  const { dispatchA } = useContext(AuthenticateContext)
  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [phoneNumError, setPhoneNumError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')
  const phoneNumRegex = /^(\+98|0)?9\d{9}$/

  function signup() {
    if (!phoneNumRegex.test(phoneNum)) {
      setPhoneNumError('فرمت شماره تلفن صحیح نیست')
    } else if (password.length < 8) {
      setPasswordError('رمز عبور حداقل باید 8 کاراکتر باشد')
    } else if (password !== repeatPassword) {
      setRepeatPasswordError('تکرار رمز عبور با رمز عبور برابر نیست')
    } else {
      const user = { name, phone: `${phoneNum}`, password: `${password}` }
      dispatchA({ type: REGISTER, user })

      dispatch({ type: CODE })
    }
  }
  return (
    <div>
      <Modal open={state.signUp} onClose={() => dispatch({ type: 'closeAll' })}>
        <div className={classes.root}>
          <div className={classes.topDiv}>
            <Grid item md={6} xs={12} className={classes.formGrid}>
              <Typography variant="body2">نام و نام خانوادگی:</Typography>
              <TextField
                variant="filled"
                fullWidth
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={classes.textField}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formGrid}>
              <Typography variant="body2">تلفن همراه:</Typography>
              <TextField
                variant="filled"
                fullWidth
                size="small"
                dir="ltr"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                error={phoneNumError.length > 0}
                helperText={phoneNumError}
                className={classes.textField}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formGrid}>
              <Typography variant="body2">رمز عبور:</Typography>
              <TextField
                type="password"
                variant="filled"
                fullWidth
                size="small"
                dir="ltr"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError.length > 0}
                helperText={passwordError}
                className={classes.textField}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formGrid}>
              <Typography variant="body2">تکرار رمز عبور:</Typography>
              <TextField
                type="password"
                variant="filled"
                fullWidth
                size="small"
                dir="ltr"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                error={repeatPasswordError.length > 0}
                helperText={repeatPasswordError}
                className={classes.textField}
              />
            </Grid>
          </div>
          <Grid item md={6} className={classes.buttonDiv}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={signup}
            >
              <Typography color="textPrimary"> ثبت نام</Typography>
            </Button>
          </Grid>
          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={() => dispatch({ type: SIGNIN })}
          >
            قبلا ثبت نام کرده اید؟
          </Button>
        </div>
      </Modal>
    </div>
  )
}
