import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"
import styled from "styled-components"

/*
    STYLE MOVIE SEARCH RESULTS HOWEVER YOU WANT 
    ADD EXTRA HOVER FUCNTIONS?  
*/

const StyledImg = styled.img`
width: 200;
height: 350;
display: block;
`;
//Movie Card Component

export default function MovieSearched(props){
    const [hovered, ref] = useHover()
    const {setActiveCard, generateGenreIDs} = useContext(Context)

   

    function userRating(){
        if(hovered){
        return <h3 style={{position: "absolute", top: "20px", right: "20px"}}>{HoverUserRating(props.id)}</h3>
        }
    }
    
    return (
        <div 
            ref={ref}
            style={{position: "relative"}}
            onClick={() => {
                setActiveCard(
                  <div>
                    <BackArrow />
                    <div>
                      <img
                        alt=""
                        src={props.poster_path}
                      ></img>
                      <h1>{props.title}</h1>
                      <small>Release Date: {props.release_date}</small>
                      <h4>Rating: {props.vote_average}</h4>
                      <p>{props.overview}</p>
                      <div>{generateGenreIDs(props.genreIds)}</div>
                      <StarRating movieData={props} />
                    </div>
                  </div>
                )
                //set window view back to normal non-scrolled
                window.scrollTo(0, 0);
              }}
        >
            <StyledImg 
              src={props.poster_path}
              style={{display: "block"}}
              width="200"
              heigh="350"
              >

            </StyledImg>
            {/* <img 
              style={{display: "block"}}
              src={props.poster_path}
              width="200"
              heigh="350">
                
                </img> */}
            {userRating()}
        </div>
        
    )
}