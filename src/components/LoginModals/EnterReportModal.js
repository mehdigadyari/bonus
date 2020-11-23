import { Button, Modal, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import useStyles from './EnterReportModal.Style'
import { LoginContext } from '../../contexts/LoginContext'

export default function EnterReportModal() {
  const classes = useStyles()
  const { state, dispatch } = useContext(LoginContext)
  const history = useHistory()
  const reportClick = () => {
    dispatch({ type: 'closeAll' })
    history.push('/workspace')
  }

  return (
    <div>
      <Modal
        open={state.enterReport}
        onClose={() => dispatch({ type: 'closeAll' })}
      >
        <div className={classes.root}>
          <div>
            <div className={classes.topButtonDiv}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={reportClick}
              >
                <Typography color="textPrimary">صفحه گزارشات</Typography>
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={() => dispatch({ type: 'closeAll' })}
              >
                <Typography color="textPrimary">بستن</Typography>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
