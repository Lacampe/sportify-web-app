import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from '../sagas'
import appReducer from './reducers'

const configureStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // mount it on the Store
  const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  // then run it
  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
