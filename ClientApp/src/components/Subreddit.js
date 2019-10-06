import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Banner from './Banner'
// import Votes from './Votes'
// import { Link } from 'react-router-dom'

const Subreddit = () => {
  const [post, setPost] = useState([])

  // const [comment, setComment] = useState([])

  const getPost = async () => {
    const resp = await axios.get('https://localhost:5001/api/Post')
    console.log('get this post response', resp)
    console.log('get this post', resp.data)
    setPost(resp.data)
  }

  // const getComment = async id => {
  //   const resp = await axios.get('https://localhost:5001/api/Comment')
  //   console.log('comment response', resp)
  //   console.log('get comment', resp.data)
  //   setComment(resp.data)
  // }

  useEffect(() => {
    getPost()
    // getComment()
  }, [])

  if (!post) return <></>
  // if (!comment) return 'null'

  return (
    <>
      <Nav />
      <Banner />
      <form className="subreddit-body">
        <section className="posts">
          <section className="rectangles">
            <header className="title">
              <div>
                {post.map(post => (
                  <div key={post.id}>
                    {post.title}
                    {/* {post.content} */}
                  </div>
                ))}
              </div>
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
        </section>
      </form>
    </>
  )
}

export default Subreddit

{
  /* putting votes here breaks everything */
}
{
  /* <Votes /> */
}
{
  /* <Votes id={2} /> */
}
