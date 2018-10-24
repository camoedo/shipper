import { combineReducers } from "redux"
import * as types from '../constants'

const message = (state = '', action) => {
  switch (action.type) {
    case types.SHOW_MESSAGE:
      return action.message
    default:
      return state
  }
}

export default combineReducers({ message, })