import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Votes = props => {
  const [id] = useState(props.match.params.id)
  const [upVotes, setUpVotes] = useState(0)
  // const [downVotes, setDownVotes] = useState(0)

  const getUpVotes = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/UpVote`
    )
    console.log(getUpVotes)
    console.log('upvotes response', resp)
    console.log('upvotes', resp.data)
    setUpVotes(resp.data)
  }

  useEffect(() => {
    getUpVotes(id)
  }, [id])

  if (!upVotes) return 'null'

  // const getDownVotes = async () => {
  //   const resp = await axios.patch(
  //     'https://localhost:5001/api/Post/ID/DownVote'
  //   )
  //   console.log(getDownVotes)
  //   console.log('downvotes response', resp)
  //   console.log('downvotes', resp.data)
  //   setDownVotes(true)
  //   setUpVotes(false)
  // }

  return (
    <>
      <p>{upVotes}</p>
      <button onClick={() => setUpVotes(upVotes + 1)}>UP</button>
    </>
  )
}

export default Votes
