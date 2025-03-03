import React, { useState } from "react";

function Search( { handleSearch } ) {
  const [search, setSearch] = useState("")

  function onHandleSearch (e){
    const userInput = e.target.value
    setSearch(userInput)
    handleSearch(userInput)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={onHandleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
