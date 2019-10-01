import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Banner from './Banner'
// import { Link } from 'react-router-dom'

const Subreddit = props => {
  // const [id] = useState(props.match.params.id)
  const [post, setPost] = useState([])
  const [setComment] = useState([])

  const getPost = async id => {
    const resp = await axios.get('https://localhost:5001/api/Post')
    console.log(resp)
    console.log(resp.data)
    setPost(resp.data)
  }

  const getComment = async id => {
    const resp = await axios.get('https://localhost:5001/api/Comment')
    console.log(resp)
    console.log(resp.data)
    setComment(resp.data)
  }

  useEffect(() => {
    getPost()
    getComment()
  }, [])

  if (!post) return 'null'

  return (
    <>
      <Nav />
      <Banner />
      <section className="subreddit-body">
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
      </section>

      <section className="subreddit-body">
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
      </section>

      <section className="subreddit-body">
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
      </section>
    </>
  )
}

export default Subreddit
