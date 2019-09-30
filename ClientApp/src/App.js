import React, { Component } from 'react'
// import { Route } from 'react-router'
// import { Home } from './components/Home'
import Nav from './components/Nav'
import Banner from './components/Banner'
import SubredditBody from './components/SubredditBody'
import Community from './components/Community'
import 'bulma/css/bulma.css'
import './components/index.css'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <>
        <Nav />
        <Banner />
        <SubredditBody />
        <Community />
      </>
    )
  }
}
