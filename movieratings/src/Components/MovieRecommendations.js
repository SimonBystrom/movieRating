import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"


import {MovieImg, MovieElementWrapper} from "../StyledComponents/MovieCardStyles"
import {ActiveWrapper, ActiveImg, ActiveMovieInfoWrapper, 
  ActiveTitle, ActiveRelease, ActiveRating,
  ActiveDescription, ActiveGenre} from "../StyledComponents/ActiveComp"



/*
    
*/

//Renders the individual movieCard elements for the Recommendations tab
 

export default function MovieSearched(props){
    const {setActiveCard, generateGenreIDs} = useContext(Context)


    
    return (
      <MovieElementWrapper 
      recommendation
      onClick={() => {
        // Onclick displays the selected movie's information
          setActiveCard(

            <ActiveWrapper>
                <ActiveImg src={props.poster_path}>
                </ActiveImg>
               
                
                <ActiveMovieInfoWrapper>
                  <ActiveTitle>{props.title}</ActiveTitle>
                  <ActiveRelease>{props.release_date.substring(0,4)}</ActiveRelease>
                  <ActiveRating>{props.vote_average} / 10</ActiveRating>
                  <ActiveDescription>{props.overview}</ActiveDescription>
                  <ActiveGenre>{generateGenreIDs(props.genre_ids)}</ActiveGenre>
              
                  <StarRating movieData={props} />
                  <BackArrow />
                </ActiveMovieInfoWrapper>
                  
             
              </ActiveWrapper>
           
          )
          //set window view back to normal non-scrolled
          window.scrollTo(0, 40);
        }}
      >
         

          <MovieImg recommendation src={props.poster_path}></MovieImg>
           
          
        
      </MovieElementWrapper>
       
    )
}