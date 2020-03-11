import React from "react"

import {StyledFooterWrapper, StyledFooterAnchor, StyledFooterImg, StyledFooterP, StyledFooterSocial, FooterContainer} from "../StyledComponents/StyledFooter"
import TMDB from "../BackgroundImage/TMDB-legal.png"


export default function Footer(){

    return(
        <StyledFooterWrapper>
            <FooterContainer>
                <div>Icons made by 
                    <StyledFooterAnchor href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik 
                    </StyledFooterAnchor>
                        <br />
                        from 
                    <StyledFooterAnchor href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</StyledFooterAnchor>
                </div>
                <div>
                    <StyledFooterAnchor href="https://www.themoviedb.org/">
                        <StyledFooterImg src={TMDB}></StyledFooterImg>
                    </StyledFooterAnchor>
                    
                    <StyledFooterP>This product uses the TMDb API <br /> but is not endorsed or certified by TMDb.</StyledFooterP>
                    
                </div>
                <StyledFooterAnchor git href="https://github.com/SimonBystrom/movieRating">
                    <StyledFooterSocial git className="ri-github-fill"></StyledFooterSocial>
                </StyledFooterAnchor>
                    
                
                
                <StyledFooterP credits> made by 
                <br />
                    <StyledFooterAnchor href="https://github.com/SimonBystrom"> Simon Byström</StyledFooterAnchor>
                </StyledFooterP>
            </FooterContainer>
            
        </StyledFooterWrapper>
    )
}


/*
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


TMDB-legal
https://www.themoviedb.org/
This product uses the TMDb API but is not endorsed or certified by TMDb.
*/