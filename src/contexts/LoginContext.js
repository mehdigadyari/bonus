import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/LoginReducer'

const LoginContext = createContext({
  state: {
    signIn: false,
    signUp: false,
    code: false,
    changePassword: false,
    forgetPassword: false,
    exitReport: false
  },
  dispatch: () => {}
})

export { LoginContext }

function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    signIn: false,
    signUp: false,
    code: false,
    changePassword: false,
    forgetPassword: false,
    exitReport: false
  })
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  )
}
export default LoginContextProvider
