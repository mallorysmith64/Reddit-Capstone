import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Banner from './Banner'
// import Votes from './Votes'
// import { Link } from 'react-router-dom'

const Subreddit = () => {
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
      <Banner />
      <section className="subreddit-body">
        {/* className= "posts" creates the rectangles */}
        <form className="posts">
          <section className="rectangles">
            <header className="title">
              <ul>
                {posts.map(name => (
                  <li className="" key={name.id}>
                    {name.title}
                    {/* {post.content} */}
                  </li>
                ))}
              </ul>
            </header>
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
        </form>
      </section>
    </>
  )
}

// {
//   <Votes id={2} />
// }

export default Subreddit
