/* eslint-disable no-console */
import { Button, Modal, Typography } from '@material-ui/core'
import React, { useEffect, useState, useContext } from 'react'
import ReactCodeInput from 'react-code-input'
import { useHistory } from 'react-router-dom'
import useStyles from './CodeModal.style'
import { LoginContext } from '../../contexts/LoginContext'
import { AuthenticateContext } from '../../contexts/AuthnticateContext'
import {
  SIGNIN,
  SIGNUP,
  FORGET_PASSWORD,
  AUTHENTICATE
} from '../../constants/ActionTypes'

export default function CodeModal() {
  const classes = useStyles()
  const [counter, setCounter] = useState(5)
  const { state, dispatch } = useContext(LoginContext)
  const { stateA, dispatchA } = useContext(AuthenticateContext)
  const codeType = localStorage.getItem('loginCodeType')
  const history = useHistory()
  const checkcode = () => {
    // if (codeType === 'signup')
    dispatchA({ type: AUTHENTICATE })
    dispatch({ type: 'off' })
    history.push('/workspace')
    // else  dispatch({ type: CHANGE_PASSWORD })
  }
  const sendCodeAgain = () => {
    // کارهای ارسال مجدد
    setCounter(5)
  }
  useEffect(() => {
    setInterval(() => {
      return setCounter((c) => (c === 0 ? 0 : c - 1))
    }, 1000)
  }, [stateA.users])

  return (
    <div>
      <Modal open={state.code} onClose={() => dispatch({ type: 'closeAll' })}>
        <div className={classes.root}>
          <Typography variant="body2">کد پیامک شده را وارد کنید :</Typography>
          <div dir="ltr" className={classes.codeInputDiv}>
            <ReactCodeInput
              fields={5}
              inputStyle={{
                margin: 5,
                width: 35,
                height: 45,
                backgroundColor: 'rgba(0,0,0,0.3)',
                border: 'none',
                textAlign: 'center',
                color: '#fff',
                fontSize: 15
              }}
            />
          </div>
          <div>
            {counter !== 0 ? (
              <Typography variant="caption">
                {counter} ثانیه تا پایان اعتبار کد
              </Typography>
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={sendCodeAgain}
              >
                <Typography variant="caption">ارسال مجدد کد</Typography>
              </Button>
            )}
          </div>

          <div className={classes.buttonDiv}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={checkcode}
              disabled={counter === 0}
            >
              <Typography color="textPrimary">تایید کد </Typography>
            </Button>
          </div>
          <div className={classes.botomButtunDiv}>
            <Button
              variant="text"
              color="primary"
              size="small"
              onClick={() =>
                dispatch({
                  type: codeType === 'signup' ? SIGNUP : FORGET_PASSWORD
                })
              }
            >
              تغییر شماره موبایل
            </Button>
            <Button
              variant="text"
              color="primary"
              size="small"
              onClick={() => dispatch({ type: SIGNIN })}
            >
              بازگشت به صفحه ورود
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
