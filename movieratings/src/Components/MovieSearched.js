import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"
import styled from "styled-components"

import MovieImg  from "../StyledComponents/MovieImg"
import MovieElementWrapper from "../StyledComponents/MovieElementWrapper"

/*
    STYLE MOVIE SEARCH RESULTS HOWEVER YOU WANT 
    ADD EXTRA HOVER FUCNTIONS?  
*/

//Movie Card Component

export default function MovieSearched(props){
    const [hovered, ref] = useHover()
    const {setActiveCard, generateGenreIDs} = useContext(Context)

   

    function userRating(){
        if(hovered){
        return HoverUserRating(props.id)
        }
    }
    
    return (

      <MovieElementWrapper
        search
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
          <MovieImg
              search
              src={props.poster_path}
            >

            </MovieImg>
          
            {userRating()}
      </MovieElementWrapper>
       
    )
}