import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Votes from './Votes'

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
              <h2 className="white-rectangles" key={name.id}>
                {name.title}
                <li className="white-rectangles" key={name.id}>
                  {name.content}
                </li>

                {/* calling vote component, passing id*/}
                <Votes id={name.id} />

                <button className="comments">
                  <p>Comments</p>
                </button>
                <li className="between-posts"></li>
              </h2>
            ))}
          </ul>
        </header>
      </section>
    </>
  )
}

export default HomePage
