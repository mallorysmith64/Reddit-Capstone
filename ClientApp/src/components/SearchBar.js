import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = props => {
  const [id] = useState(props.id)
  const [searchTerm, setSearchTerm] = useState('')

  const getSearchTerm = async id => {
    const resp = await axios.get(`https://localhost:5001/api/Post/${id}`)
    console.log('I am here', resp.data)
    setSearchTerm(resp.data)
  }

  useEffect(() => {
    if (id) {
      getSearchTerm(id)
    }
  }, [id])

  return (
    <>
      <section className="search-container">
        <input
          type="search"
          className="search-box"
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </section>
      <button className="search-glass-button" onClick={() => getSearchTerm(id)}>
        <i className="fas fa-search"></i>
      </button>
    </>
  )
}

export default SearchBar
