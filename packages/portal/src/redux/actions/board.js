import produce from 'immer'
import { call, put, select } from 'redux-saga/effects'

// import { loadLists } from '../../services'
import { generators } from '../../utils'

export function * fetchBoards () {
  const response = yield call(generators.fetchApi, {
    loading: true,
    method: 'get',
    url: '/board'
  })
  yield put({ payload: response.data, type: 'SET_BOARD' })
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

export function * addCard (action) {
  const { fromList } = action.payload
  const { board: { list: lists } } = yield select()
  const newList = produce(
    lists, draft => {
      draft[fromList].cards.push({
        id: draft[fromList].cards.length
      })
    }
  )
  yield put({ payload: newList, type: 'SET_BOARD' })
}

export function * renameCardName (action) {
  const { fromIndex, fromList, value } = action.payload
  const { board: { list: lists } } = yield select()
  const newList = produce(
    lists, draft => {
      draft[fromList].cards[fromIndex].content = value
    }
  )
  yield put({ payload: newList, type: 'SET_BOARD' })
}

export function * renameListName (action) {
  const { fromList, value } = action.payload
  const { board: { list: lists } } = yield select()
  const newList = produce(
    lists, draft => {
      draft[fromList].title = value
    }
  )
  yield put({ payload: newList, type: 'SET_BOARD' })
}
