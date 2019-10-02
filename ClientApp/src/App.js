import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Community from './components/Community'

import Subreddit from './components/Subreddit'
import NewPostPage from './components/NewPostPage'
import HomePage from './components/HomePage'
import Votes from './components/Votes'

import 'bulma/css/bulma.css'
import './components/index.css'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/HomePage" component={HomePage}></Route>
            <Route exact path="/Subreddit" component={Subreddit}></Route>
            <Route exact path="/NewPostPage" component={NewPostPage}></Route>
            <Route exact path="/Votes" component={Votes}></Route>
            <Subreddit />
            <Community />
          </Switch>
        </Router>
      </>
    )
  }
}
