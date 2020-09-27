import produce from 'immer'
import { put, select } from 'redux-saga/effects'

import { loadLists } from '../../services'

export function * fetchBoards (pageType) {
  yield put({ payload: loadLists(), type: 'SET_BOARD' })
}

export function * moveCard (action) {
  const { from, fromList, to, toList } = action.payload
  const { board: { list: lists } } = yield select()
  const newList = produce(
    lists, draft => {
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged)
    }
  )
  yield put({ payload: newList, type: 'SET_BOARD' })
}
