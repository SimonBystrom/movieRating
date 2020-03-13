import React, { createContext, useEffect, useState } from "react";

import GenreDiv from "./StyledComponents/GenreDiv"

/* 
  Context Provider
*/

const Context = createContext();

function ContextProvider({ children }) {
  const [genreList, setGenreList] = useState();
  const [searchTarget, setSearchTarget] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [activeCard, setActiveCard] = useState();
  const [languageOnPage, setLanguageOnPage] = useState("en-US")
  const [hovered, setHovered] = useState(false)

  // pulls genre list array
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US"
    )
      .then(res => res.json())
      .then(data => {
        setGenreList(data.genres);
      });
  }, []);

  // Generates the renders Genres
  function generateGenreIDs(item) {
    let genre = "";
    let newList ;
    //loops over all the genre_id's for the selected activeMovieCard
    for (let i = 0; i < item.length; i++) {
      // filters the genrelist for matches to the activeMovieCards genre_id's and adds them to 'genre'
      genreList.filter(list => {
        if (list.id === item[i]) {
          genre += list.name + ",";
        }
      });
    }
    
    // makes the list into array of the genre names
    newList = genre.split(",")
    // removes last "empty" array item
    newList.splice(newList.length - 1, 1)
    console.log(newList)
   
    return newList.map(g => (
      <GenreDiv key={g}>
        {g}
      </GenreDiv>
    ));
   
  }

  // sets searchbox input to the correct entered keys
  function searchMovie(e) {
    setSearchInput(e.target.value);

    /*
    Adding this line makes search be more "interactive" similar to Netflix -> 
    Creates new search with every keystroke (maybe bad performance)
    */   // setSearchTarget(searchInput)
      
    console.log(searchInput);
    
  }

  function submitSearch(e) {
    e.preventDefault();
    //resets the active card to allow new search
    setActiveCard(null);
    setSearchTarget(searchInput);
    console.log(searchTarget);
  }

  // Clears search "resetting" page when going between pages
  function clearSearch() {
    setSearchTarget("");
    setSearchInput("");
    setActiveCard(null)
  }

  // Sets active card to null (used in BackArrow)
  function returnPreviousPage() {
    setActiveCard(null);
  }
  
// Sets page and search Language
  function setLanguage(language){
    setLanguageOnPage(language)
    
  }

  return (
    <Context.Provider
      value={{
        searchTarget,
        searchInput,
        searchMovie,
        submitSearch,
        setActiveCard,
        activeCard,
        clearSearch,
        generateGenreIDs,
        genreList,
        returnPreviousPage,
        hovered,
        setHovered,
        languageOnPage,
        setLanguage
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
