import { Button, Modal, TextField, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './SignUpModal.Style'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNIN, SIGNUP, CODE } from '../../constants/ActionTypes'

export default function ForgetPasswordModal() {
  const classes = useStyles()
  const { state, dispatch } = useContext(LoginContext)
  const forgetPassword = () => {
    localStorage.setItem('loginCodeType', 'forgetpassword')
    dispatch({ type: CODE })
  }

  return (
    <div>
      <Modal
        open={state.forgetPassword}
        onClose={() => dispatch({ type: 'closeAll' })}
      >
        <div className={classes.root}>
          <Typography variant="body2">تلفن همراه:</Typography>
          <TextField
            variant="filled"
            fullWidth
            size="small"
            dir="ltr"
            className={classes.textField}
          />

          <div className={classes.buttonDiv}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={forgetPassword}
            >
              <Typography color="textPrimary">ارسال کد </Typography>
            </Button>
          </div>
          <div className={classes.botomButtunDiv}>
            <Button
              variant="text"
              color="primary"
              size="small"
              onClick={() => dispatch({ type: SIGNUP })}
            >
              قبلا ثبت نام نکرده اید؟
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
