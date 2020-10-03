import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import base from './base'
import board from './board'
import pipe from './pipe'
import user from './user'

export default (history) => combineReducers({
  base,
  board,
  pipe,
  router: connectRouter(history),
  user
})
