import React, { useState, useEffect } from 'react'
import axios from 'axios'

// state for upvotes, downvotes
const Votes = props => {
  const [id] = useState(props.id)
  const [mapID, setMapID] = useState([])
  const [votes, setVotes] = useState(0)

  const getVotes = async id => {
    const resp = await axios.get(`https://localhost:5001/api/Post/${id}/Votes`)
    console.log(getVotes)
    console.log('get votes response', resp)
    console.log('received votes', resp.data)
    setVotes(resp.data.upVote - resp.data.downVote)
  }

  const IncreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/UpVote`,
      { id }
    )
    console.log(IncreaseVote)
    console.log('upvotes response', resp)
    console.log('upvotes', resp.data)
    setVotes(resp.data.upVote - resp.data.downVote)
  }

  const DecreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/DownVote`
    )
    console.log(DecreaseVote)
    console.log('downvotes response', resp)
    console.log('downvotes', resp.data)
    setVotes(resp.data.upVote - resp.data.downVote)
  }

  useEffect(() => {
    if (id) {
      getVotes(id)
    }
  }, [id])

  return (
    <>
      {/* <button
        onClick={() => {
          setVotes()
        }}
      > */}
      <button className="arrows" onClick={() => IncreaseVote(id)}>
        <section className="up-arrow">&#x2B06;</section>
      </button>

      <p className="vote-count">{votes}</p>
      <button className="arrows" onClick={() => DecreaseVote(id)}>
        <section className="down-arrow">&#x2B07;</section>
      </button>
    </>
  )
}

export default Votes
