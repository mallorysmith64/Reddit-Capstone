import React, { useState, useEffect } from 'react'
import axios from 'axios'

// state for upvotes, downvotes
const Votes = props => {
  // const [id] = useState(props.postId)
  const [id] = useState()
  const [mapID, setMapID] = useState([])
  const [votes, setVotes] = useState(0)

  const getVotes = async id => {
    const resp = await axios.get(`https://localhost:5001/api/Post/${id}/Votes`)
    console.log(getVotes)
    console.log('get votes response', resp)
    console.log('received votes', resp.data)
    // setUpVotes(resp.data)
    setMapID(resp.data)
  }

  //stephen's map function
  const mapping = () => {
    const nMap = mapID.map(l => l.ID)
    console.log(nMap)
    return nMap
  }

  const IncreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/UpVote`,
      { id }
    )
    console.log(IncreaseVote)
    console.log('upvotes response', resp)
    console.log('upvotes', resp.data)
    setVotes(resp.data)
  }

  const DecreaseVote = async id => {
    const resp = await axios.patch(
      `https://localhost:5001/api/Post/${id}/DownVote`
    )
    console.log(DecreaseVote)
    console.log('downvotes response', resp)
    console.log('downvotes', resp.data)
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
          setVotes()
        }}
      > */}
      <button className="arrows" onClick={() => IncreaseVote()}>
        <section className="up-arrow">&#x2B06;</section>
      </button>

      <p className="vote-count">{votes}</p>
      <button className="arrows" onClick={() => DecreaseVote()}>
        <section className="down-arrow">&#x2B07;</section>
      </button>

      {/* stephen's button for map function */}
      <button onClick={() => mapping()}> I'm here, yo</button>
    </>
  )
}

export default Votes
