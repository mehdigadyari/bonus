import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/TimeReducer'

const TimeContext = createContext({
  state: {
    logInTime: 0,
    logOutTime: 0
  },
  dispatchT: () => {}
})

export { TimeContext }

function TimeContextProvider({ children }) {
  const [state, dispatchT] = useReducer(reducer, {
    logInTime: 0,
    logOutTime: 0
  })
  return (
    <TimeContext.Provider value={{ state, dispatchT }}>
      {children}
    </TimeContext.Provider>
  )
}
export default TimeContextProvider
