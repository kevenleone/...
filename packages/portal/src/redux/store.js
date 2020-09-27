import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import history from '../config/history'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const store = createStore(
  rootReducer(history),
  compose(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)
export default store
