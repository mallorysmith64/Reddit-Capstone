import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import SearchResults from './SearchResults'

const SearchBar = props => {
  // I do not only want numbers to work: const [id] = useState(props.id)
  const [searchTerm, setSearchTerm] = useState({
    searchResp: [],
    PostedBy: '',
    Title: '',
    Content: '',
    TimePassed: ''
  })

  getSearchTerm = event => {
    event.preventDefault()
    if (searchTerm) {
      const resp = axios.get(`/api/Search/posts?query=${searchTerm}`)
      console.log('get search term works', resp.data)
      props.updateResult(resp.data)
    }
  }

  //   postSearchTerm = save => {
  //           const resp = {postId: save.ID}
  //           axios.post('/api/SavedPost', resp)
  //           console.log('post search term works', resp.data)
  //         }
  //  }

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
        <i className="fas fa-search"></i>
      </button>
      {/* <SearchResults /> */}
    </>
  )
}

export default SearchBar
