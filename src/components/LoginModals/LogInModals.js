import React, { useContext } from 'react'
import CodeModal from './CodeModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import ChangePasswordModal from './ChangePasswordModal'
import { LoginContext } from '../../contexts/LoginContext'
import EnterReportModal from './EnterReportModal'
import ExitReportModal from './ExitReportModal'
import SignUpModal from './SignUpModal'

export default function LogInModals() {
  const { state } = useContext(LoginContext)
  return (
    <div>
      {state.signIn ? null : null}
      {state.signUp ? <SignUpModal /> : null}
      {state.code ? <CodeModal /> : null}
      {state.forgetPassword ? <ForgetPasswordModal /> : null}
      {state.changePassword ? <ChangePasswordModal /> : null}
      {state.enterReport ? <EnterReportModal /> : null}
      {state.exitReport ? <ExitReportModal /> : null}
    </div>
  )
}
