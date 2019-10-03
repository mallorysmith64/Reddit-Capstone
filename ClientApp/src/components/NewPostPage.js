import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Subreddit from './Subreddit'

const NewPostPage = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
    // comments: ''
  })

  const submitNewPost = async e => {
    e.preventDefault()
    const resp = await axios.post(`https://localhost:5001/api/Post`, post)
    console.log('post form', resp.data)
  }

  const updateForm = e => {
    setPost({
      ...post,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <Nav />
      {/* <Subreddit response={}/> */}
      <section className="contact-header">
        <h5 className="form-header">Create a Post</h5>
      </section>
      <section className="form">
        <form action="" className="col s12" onSubmit={e => submitNewPost(e)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="title"
                type="text"
                placeholder="Title"
                onChange={updateForm}
              />
            </div>
            <section className="form">
              <form
                action=""
                className="col s12"
                onSubmit={e => submitNewPost(e)}
              >
                <div className="input-field col s6">
                  <input
                    id="content"
                    type="text"
                    placeholder="Text"
                    onChange={updateForm}
                  />
                </div>
              </form>
            </section>

            {/* submit form button */}
            <button className="button" value="submit" name="action">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewPostPage
