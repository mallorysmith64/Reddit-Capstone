import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Votes from './Votes'

const ResultsPage = () => {
  const [postResp] = useState([])
  const [posts, setPosts] = useState([])

  const getPost = async () => {
    const resp = await axios.get('/api/Post')
    console.log('get this post response', resp)
    console.log('get this post', resp.data)
    setPosts(resp.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <Nav />
      <h2>Search Results</h2>
      <section className="body-background">
        <header className="title">
          {postResp.length > 0 && (
            <ul className="each-post">
              {posts.map(name => (
                <h2 className="white-rectangles" key={name.id}>
                  {name.title}
                  <li className="white-rectangles" key={name.id}>
                    {name.content}
                  </li>

                  <Votes id={name.id} />

                  <button className="comments">
                    <p>Comments</p>
                  </button>
                  <li className="between-posts"></li>
                </h2>
              ))}
            </ul>
          )}
          {postResp.length === 0 && <h5>No Posts Were Found</h5>}
        </header>
      </section>
    </>
  )
}

export default ResultsPage

//todo: make sure to add comments to results page
