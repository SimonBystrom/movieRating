import React, { useContext, useState, useRef } from "react";
import { Context } from "../Context";
import styled, {keyframes} from 'styled-components'

import SearchBarStyled from "../StyledComponents/SearchBarStyled"


/* 
  Make Searchbar SeachIcon change color when input Searchbar is active (using css and styled component
    Make the active Search Language appear on the right side of the Searchbar
*/



const SearchIcon = styled.i`
  font-size: 25px;
  color: lightgray;
  position: absolute;
  top: 7px;
  left: 140px;
  transition: all, 0.5s;
  ${SearchBarStyled}&:invalid ~ SearchIcon{
    color: blue;
  }

  
`

function SearchBar() {
  const { searchMovie, submitSearch, searchInput } = useContext(Context);
  const [active, setActive] = useState(false)
 

  return (
    <form 
        style={{position: "relative"} } 
        onSubmit={submitSearch}
      >
      
      <SearchIcon className="ri-search-2-line"></SearchIcon> 
     

      <SearchBarStyled
        placeholder="Search for a movie title.."
        type="text"
        name={searchInput}
        value={searchInput}
        onChange={searchMovie}
      ></SearchBarStyled>
    </form>
  );
}

export default SearchBar;
