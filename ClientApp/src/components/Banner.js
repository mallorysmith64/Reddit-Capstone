import React, { Component } from 'react'
import SubredditIcon from './images/subreddit_blue_icon.png'

class Banner extends Component {
  render() {
    return (
      <>
        <h1 className="banner">
          <img
            src={SubredditIcon}
            alt="subreddit icon"
            width="30"
            height="30"
          />
          r/chemistry
        </h1>
      </>
    )
  }
}

export default Banner
