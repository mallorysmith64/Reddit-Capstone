import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Community from './components/Community'

import Subreddit from './components/Subreddit'
import NewPostPage from './components/NewPostPage'
import HomePage from './components/HomePage'

import 'bulma/css/bulma.css'
import './components/index.css'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/HomePage" exact component={HomePage}></Route>
            <Route exact path="/Subreddit" exact component={Subreddit}></Route>
            <Route
              exact
              path="/NewPostPage"
              exact
              component={NewPostPage}
            ></Route>
            <Subreddit />
            <Community />
          </Switch>
        </Router>
      </>
    )
  }
}
