import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import moment from 'moment'

const UserProfile = () => {
  const [users, setUsers] = useState([])

  const getUser = async () => {
    const resp = await axios.get('/api/Users')
    console.log('get this user response', resp)
    console.log('get user', resp.data)
    setUsers(resp.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <Nav />
      <section className="body-background">
        <header className="user-settings-container">
          <i className="fas fa-cog"></i>
          <h2 className="user-settings-title">User settings</h2>
        </header>
        {users.map(name => (
          <section className="rectangle-container">
            <article className="white-rectangle" key={name.id}>
              <h1 className="post-title" key={name.key}>
                Email Address: {name.email}
              </h1>
              <h2 className="post-title" key={name.key}>
                Username: {name.userName || 'N/A'}
              </h2>
              <h2 className="post-title" key={name.key}>
                Cake day:
                {(name.dateSignedUp && moment().format('MMM Do YY')) || 'N/A'}
              </h2>
            </article>
          </section>
        ))}
      </section>
    </>
  )
}

export default UserProfile

//todo: using auth 0, username should update when logged into app
