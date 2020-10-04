import produce from 'immer'
import { call, put, select } from 'redux-saga/effects'

import { generators } from '../../utils'

function * updatePipe (boards) {
  const { pipe: { pipe } } = yield select()

  yield call(generators.fetchApi, {
    body: {
      ...pipe,
      boards
    },
    loading: true,
    method: 'put',
    url: `/pipe/${pipe._id}`
  })

  yield put({ payload: boards, type: 'SET_BOARD' })
}

export function * getAll () {
  try {
    const pipes = yield call(generators.fetchApi, {
      loading: true,
      method: 'get',
      url: '/pipe'
    })
    yield put({ payload: pipes.data, type: 'SET_PIPES' })
  } catch (e) {}
}

export function * fetchBoards ({ payload: pipeId }) {
  const response = yield call(generators.fetchApi, {
    loading: true,
    method: 'get',
    url: `/pipe/${pipeId}`
  })
  const { boards, ...pipe } = response.data
  yield put({ payload: { ...pipe, boards }, type: 'SET_PIPE' })
  yield put({ payload: boards, type: 'SET_BOARD' })
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
  yield updatePipe(newList)
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
  yield updatePipe(newList)
}

export function * renameCardName (action) {
  const { fromIndex, fromList, value } = action.payload
  const { board: { list: lists } } = yield select()
  const newList = produce(
    lists, draft => {
      draft[fromList].cards[fromIndex].content = value
    }
  )
  yield updatePipe(newList)
}

export function * renameListName (action) {
  const { fromList, value } = action.payload
  const { board: { list: lists } } = yield select()
  const newList = produce(
    lists, draft => {
      draft[fromList].title = value
    }
  )
  yield updatePipe(newList)
}
