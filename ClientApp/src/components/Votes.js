import React, { useState, useEffect } from 'react'
import axios from 'axios'

// state for upvotes, downvotes
const Votes = props => {
  // const [id] = useState(props.postId)
  const [id] = useState()
  const [mapID, setMapID] = useState([])
  const [votes, setVotes] = useState(0)

  const getVotes = async id => {
    const resp = await axios.get(`https://localhost:5001/api/Post/${id}/UpVote`)
    console.log(getVotes)
    console.log('get votes response', resp)
    console.log('received upvotes', resp.data)
    // setUpVotes(resp.data)
    setMapID(resp.data)
  }

  const mapping = () => {
    const nMap = mapID.map(l => l.ID)
    console.log(nMap)
    return nMap
  }

  const IncreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/UpVote`
    )
    console.log(IncreaseVote)
    console.log('upvotes response', resp)
    console.log('upvotes', resp.data)
    setVotes(resp.data)
  }

  const DecreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/UpVote`
    )
    console.log(DecreaseVote)
    console.log('upvotes response', resp)
    console.log('upvotes', resp.data)
    setVotes(resp.data)
  }

  useEffect(() => {
    getVotes(id)
    IncreaseVote(id)
    DecreaseVote(id)
  }, [id])

  return (
    <>
      {/* <button
        onClick={() => {
          setUpVotes()
        }}
      > */}
      <button className="arrows" onclick={() => IncreaseVote()}>
        <section className="up-arrow">&#x2B06;</section>
      </button>

      <p className="vote-count">{votes}</p>
      <button className="arrows" onClick={() => DecreaseVote()}>
        <section className="down-arrow">&#x2B07;</section>
      </button>
      <button onClick={() => mapping()}> </button>
    </>
  )
}

export default Votes
