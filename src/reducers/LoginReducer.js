import {
  SIGNIN,
  SIGNUP,
  CODE,
  CHANGE_PASSWORD,
  FORGET_PASSWORD,
  EXIT_REPORT
} from '../constants/ActionTypes'

export function reducer(state, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        signIn: true,
        signUp: false,
        code: false,
        changePassword: false,
        forgetPassword: false,
        exitReport: false
      }
    case SIGNUP:
      return {
        signIn: false,
        signUp: true,
        code: false,
        changePassword: false,
        forgetPassword: false,
        exitReport: false
      }
    case CODE:
      return {
        signIn: false,
        signUp: false,
        code: true,
        changePassword: false,
        forgetPassword: false,
        exitReport: false
      }
    case CHANGE_PASSWORD:
      return {
        signIn: false,
        signUp: false,
        code: false,
        changePassword: true,
        forgetPassword: false,
        exitReport: false
      }
    case FORGET_PASSWORD:
      return {
        signIn: false,
        signUp: false,
        code: false,
        changePassword: false,
        forgetPassword: true,
        exitReport: false
      }
    case EXIT_REPORT:
      return {
        signIn: false,
        signUp: false,
        code: false,
        changePassword: false,
        forgetPassword: false,
        exitReport: true
      }

    default:
      return {
        signIn: false,
        signUp: false,
        code: false,
        changePassword: false,
        forgetPassword: false,
        exitReport: false
      }
  }
}
