import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const NewPostPage = () => {
  const [post, setPost] = useState({
    title: '',
    text: ''
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
                className="validate"
                onChange={updateForm}
              />
              <label htmlFor="first_name"></label>
            </div>

            {/* submit button */}
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i className="material-icons right">send</i>
              Done
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewPostPage
