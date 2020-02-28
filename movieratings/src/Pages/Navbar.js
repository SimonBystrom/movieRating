import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { Context } from "../Context";

/* 
  Add flags for the countries
  add so the searbar displays the selected country (easier to know what we are searching)
*/

function Navbar() {
  const { clearSearch, setLanguage} = useContext(Context);

  return (
    <div className="Navbar">
      <Link to="/" onClick={clearSearch}>
        <i className="ri-home-4-line"></i>
      </Link>

      <Link to="/" onClick={clearSearch}>
        <img
          alt=""
          src="https://fontmeme.com/permalink/200127/8f102e93957aabf7a387f12495c511d9.png"
        ></img>
      </Link>

      <Link to="/search" >
        <SearchBar className="search-bar" />
      </Link>

      <Link to="/recommendations" onClick={clearSearch}>
        
          <ul style={{listStyleType: 'none'}}>Recommendations</ul>
        
      </Link>

      <Link to="/history" onClick={clearSearch}>
       
          <ul style={{listStyleType: 'none'}}>History</ul>
       
      </Link>
      <Link to="/search" onClick={() => setLanguage("en-US")}>
        <ul style={{listStyleType: 'none'}}>En</ul>
      </Link>
      <Link to="/search" onClick={() => setLanguage("jp")}>
        <ul style={{listStyleType: 'none'}}>Jp</ul>
              
              
      </Link>
    </div>
  );
}

export default Navbar;

/* fix main title to something better looking (higher res) */
