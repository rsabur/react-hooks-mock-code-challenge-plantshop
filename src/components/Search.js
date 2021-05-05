import React, {useState} from "react";

function Search({ setSearchTerm }) {
  const [search, setSearch] = useState('')
  
  const searchPlants = () => {
    setSearch(setSearchTerm)
  }

  return (
    <div className="searchbar" onChange={searchPlants} >
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
