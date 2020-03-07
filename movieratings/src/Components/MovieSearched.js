import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"
import HoverAverageRating from "../Hover Elements/HoverAverageRating"

import MovieImg  from "../StyledComponents/MovieImg"
import MovieElementWrapper from "../StyledComponents/MovieElementWrapper"
import {ActiveWrapper, ActiveImg, ActiveMovieInfoWrapper, 
  ActiveTitle, ActiveRelease, ActiveRating,
  ActiveDescription, ActiveGenre} from "../StyledComponents/ActiveComp"

/*
    
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

    function averageRatingInfo(){
      if(hovered){
        return HoverAverageRating(props.vote_average)
      }
    }
    
    return (

      <MovieElementWrapper
        search
        ref={ref}
        style={{position: "relative"}}
        onClick={() => {
            setActiveCard(
              <ActiveWrapper>
                <ActiveImg src={props.poster_path}></ActiveImg>
              
                <BackArrow />
                <ActiveMovieInfoWrapper>
                  <ActiveTitle>{props.title}</ActiveTitle>
                  <ActiveRelease>{props.release_date.substring(0,4)}</ActiveRelease>
                  <ActiveRating>{props.vote_average} / 10</ActiveRating>
                  <ActiveDescription>{props.overview}</ActiveDescription>
                  <ActiveGenre>{generateGenreIDs(props.genreIds)}</ActiveGenre>
              
                  <StarRating movieData={props} />
          
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