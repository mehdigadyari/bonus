import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/AuthenicateReducer'

const AuthenticateContext = createContext({
  stateA: {
    isLogin: false,
    thisUser: {},
    newuUser: {},
    users: [
      { name: 'مهدی گادیاری', phone: '09901975133', password: '12345678' }
    ]
  },
  dispatchA: () => {}
})

export { AuthenticateContext }

function AuthenticateContextProvider({ children }) {
  const [stateA, dispatchA] = useReducer(reducer, {
    isLogin: false,
    thisUser: {},
    newuUser: {},
    users: [
      {
        name: 'مهدی گادیاری',
        phone: '09901975133',
        password: '12345678'
      }
    ]
  })
  return (
    <AuthenticateContext.Provider value={{ stateA, dispatchA }}>
      {children}
    </AuthenticateContext.Provider>
  )
}
export default AuthenticateContextProvider
