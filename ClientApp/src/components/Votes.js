import React, { useState, useEffect } from 'react'
import axios from 'axios'

// state for upvotes, downvotes
const Votes = props => {
  // const [id] = useState(props.postId)
  const [id] = useState(0)
  const [map, setMap] = useState([])
  const [upVotes, setUpVotes] = useState(0)
  // const [downVotes, setDownVotes] = useState({})

  const getVotes = async id => {
    const resp = await axios.get(`https://localhost:5001/api/Post/${id}/UpVote`)
    console.log(getVotes)
    console.log('get votes response', resp)
    console.log('received upvotes', resp.data)
    // setUpVotes(resp.data)
    setMap(resp.data)
  }

  const mapping = () => {
    const nMap = map.map(l => l.ID)
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

  // if (!upVotes) return 'null'
  // if (!downVotes) return 'null'

  return (
    <>
      {/* <p>{upVotes}</p> */}
      {/* <button
        onClick={() => {
          setUpVotes()
        }}
      > */}
      <button className="arrows">
        <section className="up-arrow">&#x2B06;</section>
      </button>
      <h1 className="vote-count">9</h1>
      <button className="arrows">
        <section className="down-arrow">&#x2B07;</section>
      </button>
      <button onClick={() => mapping()}>this shit is here </button>
    </>
  )
}

export default Votes

{
  /* <p>{downVotes}</p> */
}

{
  /* todo: put onclick event on upvotes and downvotes button */
}
{
}
