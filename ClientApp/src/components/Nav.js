import React, { useState } from 'react'
import RedditIcon from './images/reddit_filled_icon.png'
import SubredditIcon from './images/subreddit_blue_icon.png'
import DefaultAvatar from './images/reddit_default_avatar.png'
import { Link } from 'react-router-dom'
// import NewPostPage from './NewPostPage'

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState('')
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
              <Link to="/HomePage">
                <a href="/#" className="dropdown-item">
                  Home
                </a>
              </Link>
              <Link to="/Subreddit">
                <a href="/#" className="dropdown-item">
                  Subreddit
                </a>
              </Link>
            </div>
          </div>
        </div>

        <section className="search-container">
          <input
            type="search"
            className="search-box"
            placeholder="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </section>
        <button className="search-glass-button">
          <i className="fas fa-search"></i>
        </button>

        {/* post button */}
        <Link to="/NewPostPage">
          <section className="create-post-button">
            <button>
              <i className="fas fa-pen"></i>
            </button>
          </section>
        </Link>

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
              <div className="dropdown-content">
                <a href="/#" className="dropdown-item">
                  My Profile
                </a>
                <a href="/#" className="dropdown-item">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}

export default Nav
