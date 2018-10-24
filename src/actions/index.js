import * as types from '../constants'

export const showMessage = (message) => ({
  type: types.SHOW_MESSAGE,
  message
});