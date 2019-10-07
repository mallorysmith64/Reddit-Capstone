import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [comment, setComment] = useState([])

  const getPost = async () => {
    const resp = await axios.get('https://localhost:5001/api/Post')
    console.log('get this post response', resp)
    console.log('get this post', resp.data)
    setPosts(resp.data)
  }

  const getComment = async id => {
    const resp = await axios.get('https://localhost:5001/api/Comment')
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
      {/* className= "posts" creates the rectangles */}
      <section className="body-background">
        {/* <form className="rectangles"> */}
        <header className="title">
          <ul className="each-post">
            {posts.map(name => (
              <li className="white-rectangles" key={name.id}>
                {name.title}
                <li className="white-rectangles" key={name.id}>
                  {name.content}
                </li>
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
                <li className="between-posts"></li>
              </li>
            ))}
          </ul>
        </header>
      </section>
    </>
  )
}

export default HomePage
