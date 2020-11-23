/* eslint-disable no-shadow */
import React, { createContext, useState } from 'react'
import MyAlert from './index'

const AlertContext = createContext({
  showSuccessAlert: () => {},
  showErrorAlert: () => {}
})
export { AlertContext }

export default function AlertContextProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')
  const showSuccessAlert = (message) => {
    setMessage(message)
    setType('success')
    setOpen(true)
  }
  const showErrorAlert = (message) => {
    setMessage(message)
    setType('error')
    setOpen(true)
  }
  return (
    <AlertContext.Provider
      value={{
        showErrorAlert,
        showSuccessAlert
      }}
    >
      {children}
      <MyAlert type={type} open={open} setOpen={setOpen} message={message} />
    </AlertContext.Provider>
  )
}
