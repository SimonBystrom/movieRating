import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { Context } from "../Context";
import { createGlobalStyle } from "styled-components";

import styled from 'styled-components'

import NavbarStyle from "../StyledComponents/NavbarStyle"
import Japanese from "../FlagIcons/japan.png"
import English from "../FlagIcons/united-kingdom.png"


/* 
  Style the StyledLink so they look good an appear correctly! 
*/



const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  margin-left: 20px;
`;



function Navbar() {
  const { clearSearch, setLanguage} = useContext(Context);

  return (
    <NavbarStyle >
      

      <StyledLink to="/" onClick={clearSearch}>
       
        
        <h1 style={{fontFamily: "Ubuntu", fontWeight: "3000", color: "#D05353"}}>Movie Ratings</h1>
      </StyledLink>

      <StyledLink to="/search" >
        <SearchBar className="search-bar" />
      </StyledLink>

      <StyledLink to="/recommendations" onClick={clearSearch}>
         Recommendations
      </StyledLink>

      <StyledLink to="/history" onClick={clearSearch}>
         History
      </StyledLink>
      <StyledLink to="/search" onClick={() => setLanguage("en-US")}>
        <img style={{width: "30px", height: "30px", opacity: "0.85"}} src={English}></img>
      </StyledLink>
      <StyledLink to="/search" onClick={() => setLanguage("jp")}>
        <img style={{width: "30px", height: "30px", opacity: "0.85"}} src={Japanese}></img>
              
              
      </StyledLink>
    </NavbarStyle>
  );
}

export default Navbar;

/* fix main title to something better looking (higher res) */
