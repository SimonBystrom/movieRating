import React,{useContext, useState} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"

import MovieImg from "../StyledComponents/MovieImg"
import MovieElementWrapper from "../StyledComponents/MovieElementWrapper"
import {ActiveWrapper, ActiveImg, ActiveMovieInfoWrapper, 
        ActiveTitle, ActiveRelease, ActiveRating,
        ActiveDescription} from "../StyledComponents/ActiveComp"



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

    const release = () => {
      if(props.releaseDate){
       return  <ActiveRelease>{props.releaseDate.substring(0,4)}</ActiveRelease>
      } else {
        return <ActiveRelease>No release info available..</ActiveRelease>
      }
    }
    const rating = () => {
      if(props.voteAverage){
        return <ActiveRating>{props.voteAverage} / 10</ActiveRating>
      } else {
        return <ActiveRating>No vote average data found..</ActiveRating>
      }
    }
    const description = () => {
      if(props.overview){
        return <ActiveDescription>{props.overview}</ActiveDescription>
      } else {
        return <ActiveDescription>No description data found..</ActiveDescription>
      }
    }

   
    
    return (
        <MovieElementWrapper 
          history
          ref={ref}
          onClick={() => {
            setActiveCard(
              <ActiveWrapper>
                <ActiveImg src={props.poster_path}>
                </ActiveImg>
               
                <BackArrow />
                <ActiveMovieInfoWrapper>
                  <ActiveTitle>{props.title}</ActiveTitle>
                  {release()}
                  {rating()}
                  {description()}
              
                  <StarRating movieData={props} />
          
                </ActiveMovieInfoWrapper>
                  
             
              </ActiveWrapper>
              
            )
            //set window view back to normal non-scrolled
            window.scrollTo(0, 40);
          }}
        >
          <MovieImg history src={props.poster_path}>

          </MovieImg>
            
            {userRating()}

        </MovieElementWrapper>
          
            
           
          
       
        
    )
}