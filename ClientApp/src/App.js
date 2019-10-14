import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Auth from './components/auth'
import axios from 'axios'

// import Community from './components/Community'
import HomePage from './components/HomePage'
import Subreddit from './components/Subreddit'
import Votes from './components/Votes'
import SearchBar from './components/SearchBar'
import ResultsPage from './components/ResultsPage'
import Comments from './components/Comments'
import NewPostPage from './components/NewPostPage'
import UserProfile from './components/UserProfile'
// import ChangeColors from './components/ChangeColors'

import 'bulma/css/bulma.css'
import './components/index.css'
import History from './History'

// export default class App extends Component {
//   static displayName = App.name
class App extends Component {
  // componentWillMount() {
  //   if (Auth.isAuthenticated()) {
  //     axios.defaults.headers.common = {
  //       Authorization: auth.authorizationHeader()
  //     }
  //   }
  // }

  render() {
    return (
      <>
        <Router history={History}>
          <Switch>
            <Route path="/login" render={() => Auth.login()} />
            <Route
              path="/logout"
              render={() => {
                Auth.logout()
                return <p />
              }}
            />
            <Route
              path="/callback"
              render={() => {
                Auth.handleAuthentication(() => {
                  axios.defaults.headers.common = {
                    Authorization: Auth.authorizationHeader()
                  }
                })
                return <p />
              }}
            />
            <Route exact path="/" component={HomePage}></Route>
            {/* <Route exact path="/ChangeColors" component={ChangeColors}></Route> */}
            <Route exact path="/SearchBar" component={SearchBar}></Route>
            <Route exact path="/ResultsPage" component={ResultsPage}></Route>
            <Route exact path="/Votes" component={Votes}></Route>
            <Route exact path="/Subreddit" component={Subreddit}></Route>
            <Route exact path="/Comments" component={Comments}></Route>
            <Route exact path="/UserProfile" component={UserProfile}></Route>
            <Route exact path="/NewPostPage" component={NewPostPage}></Route>
          </Switch>
          {/* <Community /> */}
        </Router>
      </>
    )
  }
}

export default App
