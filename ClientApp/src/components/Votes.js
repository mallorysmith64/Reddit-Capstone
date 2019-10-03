import React, { useState, useEffect } from 'react'
import axios from 'axios'

// post voting
const Votes = props => {
  const [id] = useState(props.postId)
  const [upVotes, setUpVotes] = useState({})
  // const [downVotes, setDownVotes] = useState({})

  const getVotes = async id => {
    const resp = await axios.get(`https://localhost:5001/api/Post/${id}/UpVote`)
    console.log(getVotes)
    console.log('get votes response', resp)
    console.log('received upvotes', resp.data)
    setUpVotes(resp.data)
  }

  const IncreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/UpVote`
    )
    console.log(IncreaseVote)
    console.log('upvotes response', resp)
    console.log('upvotes', resp.data)
    setUpVotes(resp.data)
  }

  // const DecreaseVote = async id => {
  //   const resp = await axios.patch(
  //     `https://localhost:5001/api/Post/${id}/UpVote`
  //   )
  //   console.log(DecreaseVote)
  //   console.log('upvotes response', resp)
  //   console.log('upvotes', resp.data)
  //   setUpVotes(resp.data)
  // }

  useEffect(() => {
    getVotes(id)
    IncreaseVote(id)
    // DecreaseVote(id)
  }, [id])

  if (!upVotes) return 'null'
  // if (!downVotes) return 'null'

  return (
    <>
      <p>{upVotes}</p>
      {/* <p>{downVotes}</p> */}

      {/* todo: put onclick event on upvotes and downvotes button */}
      {/* <button
        onClick={() => {
          setUpVotes()
        }}
        className="arrows"
      >
        <section className="up-arrow">&#x2B06;</section>
      </button>
      <h1 className="vote-count">8</h1> */}
    </>
  )
}

export default Votes
