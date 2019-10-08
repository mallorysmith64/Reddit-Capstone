import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const getSearchTerm = async () => {
    const resp = await axios.get(`https://localhost:5001/api/Post/{id}`)
    console.log('I am here', resp.data)
    setSearchTerm(resp.data)
  }

  useEffect(() => {
    getSearchTerm()
  }, [])

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
      <button className="search-glass-button" onClick={getSearchTerm}>
        <i className="fas fa-search"></i>
      </button>
    </>
  )
}

export default SearchBar
