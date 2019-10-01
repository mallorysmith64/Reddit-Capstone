import React, { Component } from 'react'
import Nav from './Nav'
// import Subreddit from './Subreddit'

class HomePage extends Component {
  render() {
    return (
      <>
        <Nav />
        <section className="subreddit-body">
          <section className="posts">
            <section className="rectangles">
              <header className="title">Title</header>
              <button className="arrows">
                <section className="up-arrow">&#x2B06;</section>
              </button>
              <h1 className="vote-count">8</h1>
              <button className="arrows">
                <section className="down-arrow">&#x2B07;</section>
              </button>
              <button className="comments">
                <p>Comments</p>
              </button>
            </section>
          </section>
        </section>

        <section className="subreddit-body">
          <section className="posts">
            <section className="rectangles">
              <header className="title">Title</header>
              <button className="arrows">
                <section className="up-arrow">&#x2B06;</section>
              </button>
              <h1 className="vote-count">8</h1>
              <button className="arrows">
                <section className="down-arrow">&#x2B07;</section>
              </button>
              <button className="comments">
                <p>Comments</p>
              </button>
            </section>
          </section>
        </section>

        <section className="subreddit-body">
          <section className="posts">
            <section className="rectangles">
              <header className="title">Title</header>
              <button className="arrows">
                <section className="up-arrow">&#x2B06;</section>
              </button>
              <h1 className="vote-count">8</h1>
              <button className="arrows">
                <section className="down-arrow">&#x2B07;</section>
              </button>
              <button className="comments">
                <p>Comments</p>
              </button>
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default HomePage
