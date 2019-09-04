import { createStore, combineReducers, applyMiddleware } from 'redux'
import usersReducer from './users/reducer'
import statusesReducer from './statuses/reducer'
import commentsReducer from './comments/reducer'
import messagesReducer from './messages/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const rootReducer = combineReducers({
  users: usersReducer,
  statuses: statusesReducer,
  comments: commentsReducer,
  messages: messagesReducer,
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))
