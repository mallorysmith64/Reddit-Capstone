import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Banner from './Banner'
// import Votes from './Votes'
// import { Link } from 'react-router-dom'

const Subreddit = props => {
  const [post, setPost] = useState([])

  // const [comment, setComment] = useState([])

  const getPost = async id => {
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

  if (!post) return 'null'
  // if (!comment) return 'null'

  return (
    <>
      <Nav />
      <Banner />
      {post.map((name, key) => {
        return (
          <section key={key}>
            <h5>{[name.title, name.content]}</h5>
          </section>
        )
      })}
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
{
  /* <section className="subreddit-body">
  <section className="posts">
    <section className="rectangles">
      <header className="title">Title</header>
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
</section> */
}
