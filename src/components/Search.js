import React, { useState } from "react";

function Search({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState('')
  const handleSearch = () => {
    setSearchTerm(searchInput)
  }

  return (
    <div className="searchbar" onChange={handleSearch} >
      <label htmlFor="search" >Search Plants:</label>
      <input 
        type="text"
        id="search"
        value={searchInput}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;

