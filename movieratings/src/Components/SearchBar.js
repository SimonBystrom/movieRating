import React, { useContext, useState, useRef } from "react";
import { Context } from "../Context";
import styled, {keyframes} from 'styled-components'

import {SearchBarStyled, SearchIcon, SearchLanguage} from "../StyledComponents/SearchBarStyled"
import Japanese from "../FlagIcons/japan-hex.png"
import English from "../FlagIcons/united-kingdom-hex.png"


/* 
  
*/





function SearchBar() {
  const { searchMovie, submitSearch, searchInput, languageOnPage } = useContext(Context);


  function selectedLanguage(){
    if(languageOnPage === "en-US"){
      return English
    } else if(languageOnPage === "jp"){
      return Japanese
    }
  }
 
  const japanesePlaceholder =  "タイトルを探してください. ."
  const englishPlaceholder = "Search for a movie title.."

  return (
    <form 
        style={{position: "relative", cursor:"default"} } 
        onSubmit={submitSearch}
      >
        
        <SearchBarStyled
          placeholder={languageOnPage === "jp" ? japanesePlaceholder : languageOnPage === "en-US" ? englishPlaceholder : "Search for a movie title.."}
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
