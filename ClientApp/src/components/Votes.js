import React, { useState } from 'react'
import axios from 'axios'

const Votes = props => {
  const [upVotes, setUpVotes] = useState(false)
  // const [downVotes, setDownVotes] = useState(false)
  const [post, setPost] = useState(props.post)
  //maybe it's useState(props.comment)
  // const [comment, setComment] = useState('')

  const getUpVotes = async () => {
    const resp = await axios.patch('https://localhost:5001/api/postID/UpVote')
    console.log(getUpVotes)
    console.log(resp)
    console.log('data', resp.data)
    // console.log('upvotes', resp.data.downVote)
    setUpVotes(true)
    // setDownVotes(false)
  }

  // const getDownVotes = async () => {
  //   const resp = await axios.patch(
  //     'https://localhost:5001/api/Posts/${props.post.ID}/DownVote'
  //   )
  //   console.log(resp)
  //   console.log(resp.data)
  //   setDownVotes(true)
  // }

  return (
    <>
      <section
        onClick={() => {
          getUpVotes()
        }}
      ></section>
    </>
  )
}

export default Votes
