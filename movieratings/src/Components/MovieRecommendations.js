import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"

import MovieImg from "../StyledComponents/MovieImg"
import MovieElementWrapper from "../StyledComponents/MovieElementWrapper"


/*
    STYLE RECOMMENDATIONS TAG HOWEVER YOU WANT
    DELETE USERRATING HOVER (no purpose) ADD NETFLIX HOWER 
*/

//Movie Card Component

export default function MovieSearched(props){
    const [hovered, ref] = useHover()
    const {setActiveCard, generateGenreIDs} = useContext(Context)

  
    
    return (
      <MovieElementWrapper 
      recommendation
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
                <small>Release Date: {props.releaseDate}</small>
                <h4>Rating: {props.voteAverage}</h4>
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
         

          <MovieImg recommendation src={props.poster_path}></MovieImg>
           
        
        
      </MovieElementWrapper>
       
    )
}