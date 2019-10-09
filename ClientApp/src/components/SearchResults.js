import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchResults = props => {
  const [id] = useState(props.id)
  const [searchTerm, setSearchTerm] = useState([])

  const postSearchTerm = async id => {
    const resp = await axios.post(`https://localhost:5001/api/Post/${id}`)
    console.log('I am here', resp.data)
    props.updateResult(resp.data)
    setSearchTerm(resp.data)
  }

  useEffect(() => {
    if (id) {
      postSearchTerm(id)
    }
  }, [id])

  return <>{searchTerm}</>
}

export default SearchResults
