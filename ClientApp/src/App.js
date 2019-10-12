import React, { Component } from 'react'
//do I need to import reactDOM here?
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import auth from 'auth0-js'
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
// import ChangeColors from './components/ChangeColors'

import 'bulma/css/bulma.css'
import './components/index.css'

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
        <Router>
          <Switch>
            <Route path="/login" render={() => auth.login()} />
            <Route
              path="/logout"
              render={() => {
                auth.logout()
                return <p />
              }}
            />
            <Route
              path="/callback"
              render={() => {
                auth.handleAuthentication(() => {
                  axios.defaults.headers.common = {
                    Authorization: auth.authorizationHeader()
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
            <Route exact path="/NewPostPage" component={NewPostPage}></Route>
          </Switch>
          {/* <Community /> */}
        </Router>
      </>
    )
  }
}

export default App
