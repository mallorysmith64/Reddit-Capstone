import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import SearchResults from './SearchResults'

const SearchBar = props => {
  // I do not only want numbers to work: const [id] = useState(props.id)
  //can you pass query instead of id
  const [searchTerm, setSearchTerm] = useState({
    // searchResp: [],
    // search: {
    PostedBy: '',
    Title: '',
    Content: '',
    TimePassed: ''
  })

  // }

  // const getSearchTerm = async e => {
  const getSearchTerm = async searchTerm => {
    // e.preventDefault()
    // if (searchTerm) {
    const resp = await axios.get(`/api/Search/searchTerm?query=${searchTerm}`)
    console.log('get search term works', resp)
    props.updateResult(resp.data.results)
    // }
  }

  // const postSearchTerm = async searchTerm => {
  //   const resp = axios.post(`/api/Search/searchTerm?query=${searchTerm}`)
  //   console.log('post search term works', resp)
  //   props.updateResult(resp.data)
  //   // setSearchTerm(resp.data)
  // }

  useEffect(() => {
    if (searchTerm) {
      getSearchTerm(searchTerm)
      // postSearchTerm(searchTerm)
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
        <i className="fas fa-search"></i>
      </button>
      {/* <SearchResults /> */}
    </>
  )
}

export default SearchBar
