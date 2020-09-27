import { takeLatest } from 'redux-saga/effects'

import { fetchBoards, moveCard } from './actions/board'

// eslint-disable-next-line generator-star-spacing
export default function *root () {
  yield takeLatest('REFRESH_BOARD_SAGA', fetchBoards)
  yield takeLatest('BOARD_MOVE_CARD_SAGA', moveCard)
}
