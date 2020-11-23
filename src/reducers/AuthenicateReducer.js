/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
import { REGISTER, LOGIN, LOGOUT, AUTHENTICATE } from '../constants/ActionTypes'

export function reducer(stateA, action) {
  switch (action.type) {
    case REGISTER:
      return {
        isLogin: false,
        thisUser: {},
        newUser: action.user,
        users: stateA.users
      }
    case AUTHENTICATE:
      localStorage.setItem('thisUser', JSON.stringify(stateA.newUser))
      localStorage.setItem('Users', JSON.stringify(stateA.users))
      localStorage.setItem('isLogin', true)
      return {
        isLogin: true,
        thisUser: stateA.newUser,
        newUser: stateA.newUser,
        users: stateA.users.concat(stateA.newUser)
      }
    case LOGIN:
      let succes = false
      let t
      stateA.users.forEach((item) => {
        if (
          item.phone === action.user.phone &&
          item.password === action.user.password
        ) {
          t = item
          succes = true
        }
      })

      if (succes) {
        localStorage.setItem('isLogin', true)
        localStorage.setItem('thisUser', JSON.stringify(t))
        return { isLogin: true, thisUser: t, newUser: {}, users: stateA.users }
      }
      localStorage.setItem('isLogin', false)
      return {
        isLogin: false,
        thisUser: {},
        newUser: {},
        users: stateA.users
      }

    case LOGOUT:
      localStorage.removeItem('thisUser')
      localStorage.setItem('isLogin', false)
      return {
        isLogin: false,
        thisUser: {},
        newUser: {},
        users: stateA.users
      }

    default:
      return {
        isLogin: false,
        thisUser: {},
        newUser: {},
        users: stateA.users
      }
  }
}
