import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared.js'
import Dashboard from './Dashboard.js'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet.js'
import TweetPage from './TweetPage'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

// no real use of it
function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null//has no need
  }
}
export default connect(mapStateToProps)(App)
