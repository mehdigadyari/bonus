import { Button, Modal, TextField, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from './SignUpModal.Style'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNIN } from '../../constants/ActionTypes'

export default function ForgetPasswordModal() {
  const classes = useStyles()
  const { state, dispatch } = useContext(LoginContext)
  return (
    <div>
      <Modal
        open={state.changePassword}
        onClose={() => dispatch({ type: 'closeAll' })}
      >
        <div className={classes.root}>
          <Typography variant="body2">رمز ورود جدید:</Typography>
          <TextField
            variant="filled"
            fullWidth
            size="small"
            dir="ltr"
            className={classes.textField}
          />
          <Typography variant="body2">تکرار رمز عبور:</Typography>
          <TextField
            variant="filled"
            fullWidth
            size="small"
            dir="ltr"
            className={classes.textField}
          />

          <div className={classes.buttonDiv}>
            <Button variant="contained" color="primary" size="large" fullWidth>
              تغییر رمز ورود
            </Button>
          </div>

          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={() => dispatch({ type: SIGNIN })}
          >
            بازگشت به فرم ورود
          </Button>
        </div>
      </Modal>
    </div>
  )
}
