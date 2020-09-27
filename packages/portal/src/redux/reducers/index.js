import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import base from './base'
import board from './board'
import user from './user'

export default (history) => combineReducers({
  base,
  board,
  router: connectRouter(history),
  user
})
