import { toast } from 'react-toastify'
import { call, put } from 'redux-saga/effects'

import api from '../services/api'

function * handleLoading (type) {
  if (type) {
    yield put({ type })
  }
}

export function * fetchApi (params) {
  const {
    method = 'get', url, body = {}, loading, softLoading
  } = params
  let LOADING_TYPE = null
  let data
  let err

  if (loading || softLoading) {
    LOADING_TYPE = loading ? 'SET_LOADING' : 'SET_SOFTLOADING'
  }

  yield handleLoading(LOADING_TYPE)

  try {
    const response = yield call(api[method], url, body)
    data = response.data
  } catch (e) {
    err = e
  }

  yield handleLoading(LOADING_TYPE)

  if (err) {
    toast.error(err.message)
    throw err
  }

  return data
}
