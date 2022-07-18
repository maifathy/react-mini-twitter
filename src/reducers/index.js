import { combineReducers } from 'redux'
import users from './users.js'
import tweets from './tweets.js'
import authedUser from './authedUser.js'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  users,
  tweets,
  authedUser,
  loadingBar: loadingBarReducer
})
