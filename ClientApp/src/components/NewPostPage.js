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
    //setItem is a method
    sessionStorage.setItem('token', resp.data)
    console.log('post form', resp.data)
    if (resp.status === 200) {
      window.location.replace('/Subreddit')
    }
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
              <div className="input-field col s6">
                <input
                  id="content"
                  type="text"
                  placeholder="Text (optional)"
                  onChange={updateForm}
                />
              </div>
            </section>

            {/* submit form button */}
            <button
              className="button"
              value="submit"
              name="action"
              onClick={e => {
                submitNewPost()
              }}
            >
              Post
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewPostPage
