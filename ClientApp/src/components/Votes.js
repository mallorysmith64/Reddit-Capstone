import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Votes = props => {
  const [id] = useState(props.match.params.id)
  const [upVotes, setUpVotes] = useState(0)
  // const [downVotes, setDownVotes] = useState(0)

  const IncreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/UpVote`
    )
    console.log(getUpVotes)
    console.log('upvotes response', resp)
    console.log('upvotes', resp.data)
    setUpVotes(resp.data)
  }

  // const getVotes = async id => {
  //   const res = await axios.get(
  //     //put url from get request from backend
  //     ``
  //   )
  //   console.log(getVotes)
  //   console.log('get votes response', resp)
  //   console.log('received votes', resp.data)
  //   setUpVotes(resp.data)
  // }

  useEffect(() => {
    getUpVotes(id)
  }, [id])

  if (!upVotes) return 'null'

  return (
    <>
      <p>{upVotes}</p>
      {/* todo: put onclick event on upvote and downvote button */}
      {/* <button onClick={() => setUpVoteclassName="arrows">
              <section className="up-arrow">&#x2B06;</section>
            </button>
            <h1 className="vote-count">8</h1>
            <button className="arrows">
              <section className="down-arrow">&#x2B07;</section>
            </button> */}
    </>
  )
}

export default Votes
