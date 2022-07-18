import { getInitialData } from '../utils/api.js'
import { receiveUsers } from '../actions/users.js'
import { receiveTweets } from '../actions/tweets.js'
import { receiveAuthUser } from '../actions/authedUser.js'
import  {showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export default function handleInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ users, tweets }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(receiveAuthUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
