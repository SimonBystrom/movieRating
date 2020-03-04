import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { Context } from "../Context";
import styled from 'styled-components'

import NavbarStyle from "../StyledComponents/NavbarStyle"
import Japanese from "../FlagIcons/japan.png"
import English from "../FlagIcons/united-kingdom.png"

/* 
  Style the StyledLink so they look good an appear correctly! 
*/



const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  margin-left: 0px;
`;



function Navbar() {
  const { clearSearch, setLanguage} = useContext(Context);

  return (
    <NavbarStyle >
      <StyledLink to="/" onClick={clearSearch}>
        <i className="ri-home-4-line"></i>
      </StyledLink>

      <StyledLink to="/" onClick={clearSearch}>
        <img
          alt=""
          src="https://fontmeme.com/permalink/200127/8f102e93957aabf7a387f12495c511d9.png"
        ></img>
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
        <img style={{width: "30px", height: "30px"}} src={English}></img>
      </StyledLink>
      <StyledLink to="/search" onClick={() => setLanguage("jp")}>
        <img style={{width: "30px", height: "30px"}} src={Japanese}></img>
              
              
      </StyledLink>
    </NavbarStyle>
  );
}

export default Navbar;

/* fix main title to something better looking (higher res) */
