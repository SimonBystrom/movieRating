import React,{useContext, useState} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"

import MovieImg from "../StyledComponents/MovieImg"
import MovieElementWrapper from "../StyledComponents/MovieElementWrapper"
import SetActiveWrapper from "../StyledComponents/SetActiveWrapper"
import SetActiveImg from "../StyledComponents/SetActiveImg"
import ActiveMovieInfoWrapper from "../StyledComponents/ActiveMovieInfoWrapper"
import ActiveTitle from "../StyledComponents/ActiveTitle"
import ActiveRelease from "../StyledComponents/ActiveRelease"
import ActiveRating from "../StyledComponents/ActiveRating"
import ActiveDescription from "../StyledComponents/ActiveDescription"


/*
    Fix the click to only add info if info exists (otherwise renter nothing...)
*/

//Movie Card Component

export default function MovieHistory(props){
    const [hovered, ref] = useHover()
    const {setActiveCard} = useContext(Context)
    
   
    

    function userRating(){
        if(hovered){
        return HoverUserRating(props.id)
        }
    }

   
    
    return (
        <MovieElementWrapper 
          history
          ref={ref}
          onClick={() => {
            setActiveCard(
              <SetActiveWrapper>
                <SetActiveImg src={props.poster_path}>
                </SetActiveImg>
               
                <BackArrow />
                <ActiveMovieInfoWrapper>
                  <ActiveTitle>{props.title}</ActiveTitle>
                  <ActiveRelease>{props.releaseDate.substring(0,4)}</ActiveRelease>
                  <ActiveRating>{props.voteAverage} / 10</ActiveRating>
                  <ActiveDescription>{props.overview}</ActiveDescription>
              
                  <StarRating movieData={props} />
          
                </ActiveMovieInfoWrapper>
                  
             
              </SetActiveWrapper>
              
            )
            //set window view back to normal non-scrolled
            window.scrollTo(0, 140);
          }}
        >
          <MovieImg history src={props.poster_path}>

          </MovieImg>
            
            {userRating()}

        </MovieElementWrapper>
          
            
           
          
       
        
    )
}