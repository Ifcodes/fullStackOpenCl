import React from 'react'

const Search = ({search, setSearch}) => {
  const handleSearch = (event) => {
      setSearch(event.target.value)
  }
  return(
      <>
        <span><strong>Search</strong></span> <span> <input type="search" value={search} onChange={handleSearch}/> </span>
      </>
  )
}

export default Search;