import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import Testing from './Testing'
import Nav from './components/Nav'
import Banner from './components/Banner'
import SubredditBody from './components/SubredditBody'
import Community from './components/Community'
// import 'bulma/css/bulma.css'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        {/* <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/hello" component={Testing} /> */}
        <Nav />
        <Banner />
        <SubredditBody />
        <Community />
      </Layout>
    )
  }
}
