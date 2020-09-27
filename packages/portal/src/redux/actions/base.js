import { put } from 'redux-saga/effects'

export function * setPageType (pageType) {
  yield put({ payload: pageType, type: 'SET_PAGETYPE' })
}
