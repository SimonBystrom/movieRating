import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"
import HoverAverageRating from "../Hover Elements/HoverAverageRating"

import {MovieImg, MovieElementWrapper} from "../StyledComponents/MovieCardStyles"
import {ActiveWrapper, ActiveImg, ActiveMovieInfoWrapper, 
  ActiveTitle, ActiveRelease, ActiveRating,
  ActiveDescription, ActiveGenre} from "../StyledComponents/ActiveComp"

/*
    
*/

//Renders the individual movieCard elements for the Recommendations tab

export default function MovieSearched(props){
    const [hovered, ref] = useHover()
    const {setActiveCard, generateGenreIDs} = useContext(Context)

   
// displays if the movie has been rated by user when hovering 
    function userRating(){
        if(hovered){
        return HoverUserRating(props.id)
        }
    }

// displays the Average Rating when hovering (green smiley / yellow smiley / red smiley)
    function averageRatingInfo(){
      if(hovered){
        return HoverAverageRating(props.vote_average)
      }
    }
    
    return (

      <MovieElementWrapper
        search
        ref={ref}
        onClick={() => {
            setActiveCard(
              // Onclick displays the selected movie's information
              <ActiveWrapper>
                <ActiveImg src={props.poster_path}></ActiveImg>
              
                
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
          <MovieImg
              search
              src={props.poster_path}
            >

            </MovieImg>
          
            {userRating()}
            {averageRatingInfo()}
      </MovieElementWrapper>
       
    )
}