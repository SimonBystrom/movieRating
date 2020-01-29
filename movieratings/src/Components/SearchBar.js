import React, {useContext} from "react"
import {Context} from "../Context"

function SearchBar(){
    const {searchMovie, submitSearch, searchInput} = useContext(Context)

    return(
        <form onSubmit={submitSearch}>
        <input
          type="text"
          name={searchInput}
          value={searchInput}
          onChange={searchMovie}
          ></input>
      </form>
    )
}

export default SearchBar