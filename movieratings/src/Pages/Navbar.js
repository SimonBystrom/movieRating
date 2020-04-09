import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { Context } from "../Context";

import styled from 'styled-components'

import {NavbarStyle, NavbarContainer} from "../StyledComponents/NavbarStyles"
import Japanese from "../FlagIcons/japan.png"
import English from "../FlagIcons/united-kingdom.png"




// the Styled Links

const StyledLink = styled(Link)`
  
  color: white;
  font-weight: bold;
  margin-left: 20px;
  white-space: nowrap;

user-select: ${props => props.search ? "none" : ""};
  -webkit-user-drag: ${props => props.search ? "none" : ""};
  -moz-user-select: ${props => props.search ? "none" : ""};
`;


// Navbar for the page

function Navbar() {
  const { clearSearch, setLanguage, languageOnPage} = useContext(Context);


  const japaneseRecommendation = "オススメ"
  const englishRecommendation = "Recommendations"
  const japaneseHistory =　"履歴"
  const englishHistory = "History"

  return (
    <NavbarStyle >
      <NavbarContainer>
        <StyledLink to="/" onClick={() => {
          clearSearch()
          window.scrollTo(0,0)
          }}>
        
          <h1 style={{fontFamily: "Ubuntu", fontWeight: "3000", color: "#D05353",}}>Movie Ratings</h1>
        </StyledLink>

        <StyledLink search to="/search" onClick={window.scrollTo(0,0)}>
          <SearchBar className="search-bar" />
        </StyledLink>
          
        <StyledLink to="/recommendations" onClick={() => {
          clearSearch()
          window.scrollTo(0,0)
          }}>
          {languageOnPage === "jp" ? japaneseRecommendation : languageOnPage === "en-US" ? englishRecommendation : "Recomendations"}
        </StyledLink>
      
    
      
        <StyledLink to="/history" onClick={() => {
          clearSearch()
          window.scrollTo(0,0)
          }}>
          {languageOnPage === "jp" ?  japaneseHistory: languageOnPage === "en-US" ?  englishHistory : "History"}
        </StyledLink>
    
    
        
        <div style={{display: "flex"}}>
          <StyledLink  onClick={() => setLanguage("en-US")}>
            <img style={{width: "30px", height: "30px", opacity: "0.85"}} src={English}></img>
          </StyledLink>
          <StyledLink  onClick={() => setLanguage("jp")}>
            <img style={{width: "30px", height: "30px", opacity: "0.85", marginLeft: "-10px"}} src={Japanese}></img>
          </StyledLink>
        </div>
      </NavbarContainer>
     
      
    </NavbarStyle>
  );
}

export default Navbar;

/* fix main title to something better looking (higher res) */
