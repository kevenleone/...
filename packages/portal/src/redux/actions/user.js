import { push, replace } from 'connected-react-router'
import { call, put } from 'redux-saga/effects'

import { generators } from '../../utils'

export function * signUp (action) {
  const { data: body, formRef } = action.payload

  try {
    yield call(generators.fetchApi, {
      body,
      loading: true,
      method: 'post',
      url: '/register'
    })
    delete body.password
    yield put({ payload: body, type: 'SET_FORMUSER' })
  } catch (e) {
    formRef.current.setErrors({ email: 'Email Already Exists' })
  }
}

export function * signIn (action) {
  const body = action.payload

  try {
    const response = yield call(generators.fetchApi, {
      body,
      method: 'post',
      softLoading: true,
      url: '/auth'
    })
    const data = response.data
    console.log({ response })
    localStorage.setItem('@token', data.token)
    yield put({ payload: data, type: 'SET_LOGGEDUSER' })
    yield put(push('/'))
  } catch (e) {
    console.log(e)
  }
}

export function * signOut () {
  localStorage.removeItem('@token')
  localStorage.removeItem('@me')
  yield put(replace('/sign'))
  window.location.href = '/sign'
}
