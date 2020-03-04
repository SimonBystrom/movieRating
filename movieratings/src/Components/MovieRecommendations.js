import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"



import MovieImg from "../StyledComponents/MovieImg"
import MovieElementWrapper from "../StyledComponents/MovieElementWrapper"
import ActiveWrapper from "../StyledComponents/ActiveWrapper"
import ActiveImg from "../StyledComponents/ActiveImg"
import ActiveMovieInfoWrapper from "../StyledComponents/ActiveMovieInfoWrapper"
import ActiveTitle from "../StyledComponents/ActiveTitle"
import ActiveRelease from "../StyledComponents/ActiveRelease"
import ActiveRating from "../StyledComponents/ActiveRating"
import ActiveDescription from "../StyledComponents/ActiveDescription"
import ActiveGenre from "../StyledComponents/ActiveGenre"


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

            <ActiveWrapper>
                <ActiveImg src={props.poster_path}>
                </ActiveImg>
               
                <BackArrow />
                <ActiveMovieInfoWrapper>
                  <ActiveTitle>{props.title}</ActiveTitle>
                  <ActiveRelease>{props.releaseDate.substring(0,4)}</ActiveRelease>
                  <ActiveRating>{props.voteAverage} / 10</ActiveRating>
                  <ActiveDescription>{props.overview}</ActiveDescription>
                  <ActiveGenre>{generateGenreIDs(props.genreIds)}</ActiveGenre>
              
                  <StarRating movieData={props} />
          
                </ActiveMovieInfoWrapper>
                  
             
              </ActiveWrapper>
           
          )
          //set window view back to normal non-scrolled
          window.scrollTo(0, 90);
        }}
      >
         

          <MovieImg recommendation src={props.poster_path}></MovieImg>
           
          
        
      </MovieElementWrapper>
       
    )
}