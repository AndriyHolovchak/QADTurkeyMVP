import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './createRootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

export default (history, initialState = {}) => {

  const middleware = [
    routerMiddleware(history),
    sagaMiddleware
  ]

  const store = createStore(
    createRootReducer(),composeWithDevTools(
      applyMiddleware(...middleware)
    )
  )

  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {}

  return store
}
