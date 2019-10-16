import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchBar = props => {
  const [searchTerm, setSearchTerm] = useState('')

  const getSearchTerm = async searchTerm => {
    const resp = await axios.get(`/api/Search/searchTerm?query=${searchTerm}`)
    console.log('get search term works', resp)
    // props.updateResult(resp.data.results)
  }

  useEffect(() => {
    if (searchTerm) {
      getSearchTerm(searchTerm)
    }
  }, [searchTerm])

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
      <button
        className="search-glass-button"
        onClick={() => getSearchTerm(searchTerm)}
      >
        <Link to="/ResultsPage">
          <i className="fas fa-search"></i>
        </Link>
      </button>
    </>
  )
}

export default SearchBar
