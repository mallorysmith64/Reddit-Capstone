import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Community from './components/Community'

import HomePage from './components/HomePage'
import Subreddit from './components/Subreddit'
import Votes from './components/Votes'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Comments from './components/Comments'
import NewPostPage from './components/NewPostPage'
// import ChangeColors from './components/ChangeColors'

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
            {/* <Route exact path="/ChangeColors" component={ChangeColors}></Route> */}
            <Route exact path="/SearchBar" component={SearchBar}></Route>
            <Route
              exact
              path="/SearchResults"
              component={SearchResults}
            ></Route>
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
