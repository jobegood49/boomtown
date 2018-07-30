import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
import RootReducer from './reducers'

// @TODO: Import your reducers

const middleware = []

const store = createStore(
  RootReducer,
  // combineReducers(/* @TODO: Combine your reducers */),
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
