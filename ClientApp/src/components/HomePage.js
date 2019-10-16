import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Votes from './Votes'
import moment from 'moment'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [comment, setComment] = useState([])

  const getPost = async () => {
    const resp = await axios.get('/api/Post')
    console.log('get this post response', resp)
    console.log('get this post', resp.data)
    setPosts(resp.data)
  }

  const getComment = async id => {
    const resp = await axios.get('/api/Comment')
    console.log('comment response', resp)
    console.log('get comment', resp.data)
    setComment(resp.data)
  }

  useEffect(() => {
    getPost()
    getComment()
  }, [])

  if (!posts) return <></>
  if (!comment) return <></>

  return (
    <>
      <Nav />
      <section className="body-background">
        <header className="title">
          <ul className="each-post">
            {posts.map(name => (
              <article className="white-rectangles" key={name.id}>
                <span className="user-and-timepassed">
                  <h3 className="posted-by" key={name.id}>
                    Posted by u/{name.postedBy || 'unknown'}
                  </h3>
                  <h3 className="timepassed" key={name.id}>
                    {(name.timePassed &&
                      moment()
                        .startOf('day')
                        .fromNow()) ||
                      'unknown'}
                  </h3>
                </span>
                <h1 className="post-title" key={name.key}>
                  {name.title}
                </h1>
                <h2 className="post-content" key={name.key}>
                  {name.content}
                </h2>
                {/* calling vote component, passing id*/}
                <Votes id={name.id} />

                <button className="comments">
                  <p>Comments</p>
                </button>
                <li className="between-posts"></li>
              </article>
            ))}
          </ul>
        </header>
      </section>
    </>
  )
}

export default HomePage
