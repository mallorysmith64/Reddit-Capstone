import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const NewPostPage = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  })

  const submitNewPost = async e => {
    e.preventDefault()
    const resp = await axios.post('/api/Post', post)
    //setItem is a method
    sessionStorage.setItem('token', resp.data)
    console.log('post form', resp.data)
    //redirects to subreddit page
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

      <section className="new-post-background">
        <section className="contact-header">
          <h2 className="form-header">Create a post</h2>
        </section>

        <section className="form">
          <form action="" className="col s12" onSubmit={e => submitNewPost(e)}>
            <div className="input-field col s6">
              <input
                className="title-input"
                id="title"
                type="text"
                placeholder="Title"
                onChange={updateForm}
              />

              {/* submit form button */}
            </div>
            <div className="input-field col s6">
              <input
                className="content-input"
                id="content"
                type="text"
                placeholder="Text (optional)"
                onChange={updateForm}
              />
            </div>
            <section className="post-button">
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
            </section>
          </form>
        </section>
      </section>
    </>
  )
}

export default NewPostPage
