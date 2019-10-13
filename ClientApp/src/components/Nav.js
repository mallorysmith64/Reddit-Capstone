import React, { useState } from 'react'
import RedditIcon from './images/reddit_filled_icon.png'
import SubredditIcon from './images/subreddit_blue_icon.png'
import DefaultAvatar from './images/reddit_default_avatar.png'
import auth from './auth'
// import ChangeColors from './ChangeColors'

import SearchBar from './SearchBar'

import { Link } from 'react-router-dom'

const Nav = () => {
  const [searchResult, setSearchResult] = useState(null)

  return (
    <>
      <nav className="navbar">
        <section className="reddit-icon">
          <img src={RedditIcon} alt="reddit icon" width="30" height="30" />
          <h1 className="reddit-text">reddit</h1>
        </section>
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <Link to="/SubredditBody">
              <button
                className="subreddit-dropdown"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <section className="subreddit-text">
                  <img
                    src={SubredditIcon}
                    alt="subreddit icon"
                    width="30"
                    height="30"
                  />
                  r/chemistry
                </section>
                <i className="fas fa-caret-down"></i>
              </button>
            </Link>
          </div>

          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Link to="/" className="dropdown-item">
                Home
              </Link>

              {/* link is seen as an a tag, having an a tag within an a tag is NOT allowed */}

              <Link to="/Subreddit" className="dropdown-item">
                Subreddit
              </Link>
            </div>
          </div>
        </div>

        <SearchBar updateResult={setSearchResult} />

        {/* post button */}
        <section className="create-post-button">
          <Link to="/NewPostPage">
            <button>
              <i className="fas fa-pen"></i>
            </button>
          </Link>
        </section>

        <section>
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <button
                className="profile-dropdown-container"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <section className="profile-dropdown">
                  <img
                    src={DefaultAvatar}
                    alt="account default avatar icon"
                    width="30"
                    height="30"
                  />
                  <section className="username-container"></section>
                  <h1 className="username">username</h1>
                </section>
                <i className="fas fa-caret-down"></i>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <button
                className="dropdown-item"
                onClick={() => {
                  auth.login()
                }}
              >
                Login
              </button>
              {/* <a href="/#" className="dropdown-item">
                  // Logout //{' '}
                </a> */}
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}

export default Nav
