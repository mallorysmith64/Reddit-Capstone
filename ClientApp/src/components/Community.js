import React, { Component } from 'react'
import SubredditIcon from './images/subreddit_blue_icon.png'

class Community extends Component {
  render() {
    return (
      <>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">COMMUNITY DETAILS</p>
          </header>
          <div className="card-content">
            <div className="content">
              <img
                src={SubredditIcon}
                alt="subreddit icon"
                width="30"
                height="30"
              />
              r/chemistry
            </div>
          </div>
          <footer className="card-footer">
            <button className="create-post-button-two">
              <a href="/#" className="card-footer-item">
                CREATE POST
              </a>
            </button>
          </footer>
        </div>
      </>
    )
  }
}

export default Community
