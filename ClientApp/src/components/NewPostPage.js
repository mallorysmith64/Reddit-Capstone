import React, { Component } from 'react'
import Nav from './Nav'

class NewPostPage extends Component {
  render() {
    return (
      <>
        <Nav />

        <div>
          <div class="field">
            <div class="control">
              <textarea
                class="textarea is-primary is-medium"
                placeholder="Title"
                rows="1"
                columns="1"
              ></textarea>
            </div>
          </div>
        </div>

        <div>
          <div class="field">
            <div class="control">
              <textarea
                class="textarea is-primary is-medium"
                placeholder="Text (optional)"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>

        {/* todo: make submit button */}
        <button placeholder="Submit">Submit</button>
      </>
    )
  }
}

export default NewPostPage
