import { LOGIN_TIME, LOGOUT_TIME } from '../constants/ActionTypes'

export function reducer(state, action) {
  switch (action.type) {
    case LOGIN_TIME:
      return {
        logInTime: new Date().getTime(),
        logOutTime: state.logOutTime
      }
    case LOGOUT_TIME:
      return {
        logInTime: state.logInTime,
        logOutTime: new Date().getTime()
      }

    default:
      return {
        logInTime: 0,
        logOutTime: 0
      }
  }
}
