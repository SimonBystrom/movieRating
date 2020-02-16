import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Context } from "../Context";

function Navbar() {
  const { clearSearch } = useContext(Context);
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

      <Link to="/search">
        <SearchBar className="search-bar" />
      </Link>

      <Link to="/recommendations">
        <i className="ri-star-line"></i>
      </Link>

      <Link to="/history">
        <i className="ri-book-3-line"></i>
      </Link>
    </div>
  );
}

export default Navbar;

/* fix main title to something better looking (higher res) */
