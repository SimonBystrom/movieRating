import React, { useContext, useState, useRef } from "react";
import { Context } from "../Context";
import styled, {keyframes} from 'styled-components'

import {SearchBarStyled, SearchIcon, SearchLanguage} from "../StyledComponents/SearchBarStyled"
import Japanese from "../FlagIcons/japan-hex.png"
import English from "../FlagIcons/united-kingdom-hex.png"


/* 
  change to round flag for search
*/





function SearchBar() {
  const { searchMovie, submitSearch, searchInput, searchLanguage } = useContext(Context);


  function selectedLanguage(){
    if(searchLanguage === "en-US"){
      return English
    } else if(searchLanguage === "jp"){
      return Japanese
    }
  }
 

  return (
    <form 
        style={{position: "relative", cursor:"default"} } 
        onSubmit={submitSearch}
      >
        
        <SearchBarStyled
          placeholder="Search for a movie title.."
          type="text"
          name={searchInput}
          value={searchInput}
          onChange={searchMovie}
        >
        </SearchBarStyled>
        <SearchIcon></SearchIcon>
        
        <SearchLanguage src={selectedLanguage()}></SearchLanguage>
    
    </form>
  );
}

export default SearchBar;
