import { takeLatest } from 'redux-saga/effects'

import { addCard, fetchBoards, moveCard, renameCardName, renameListName } from './actions/board'

// eslint-disable-next-line generator-star-spacing
export default function *root () {
  yield takeLatest('REFRESH_BOARD_SAGA', fetchBoards)
  yield takeLatest('BOARD_MOVE_CARD_SAGA', moveCard)
  yield takeLatest('BOARD_ADD_CARD_SAGA', addCard)
  yield takeLatest('BOARD_RENAME_CARD_SAGA', renameCardName)
  yield takeLatest('BOARD_RENAME_LIST_SAGA', renameListName)
}
