import { call, put } from 'redux-saga/effects'

import { generators } from '../../utils'

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
