import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('hound')

  const fetchData = async () => {
    const resp = await axios.get(`https://localhost:5001/api/Post/{id}`)
    console.log('I am here', resp.data)
    setSearchTerm(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <main>
        <section>
          <input
            type="search"
            className="search-box"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={fetchData}>
            <i className="fas fa-search fa-flip-horizontal "></i>SEARCH
          </button>
        </section>
      </main>
    </>
  )
}

export default SearchBar
