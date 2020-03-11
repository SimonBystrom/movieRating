import React,{useContext, useState} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"
import HoverAverageRating from "../Hover Elements/HoverAverageRating"

import MovieImg from "../StyledComponents/MovieImg"
import MovieElementWrapper from "../StyledComponents/MovieElementWrapper"
import {ActiveWrapper, ActiveImg, ActiveMovieInfoWrapper, 
        ActiveTitle, ActiveRelease, ActiveRating,
        ActiveDescription, ActiveGenre} from "../StyledComponents/ActiveComp"



/*
   Add "Delete" button to remove movies from top five to get new recommendations
*/

//Movie Card Component

export default function MovieHistory(props){
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

    const release = () => {
      if(props.release_date){
       return  <ActiveRelease>{props.release_date.substring(0,4)}</ActiveRelease>
      } else {
        return <ActiveRelease>No release info available..</ActiveRelease>
      }
    }
    const rating = () => {
      if(props.vote_average){
        return <ActiveRating>{props.vote_average} / 10</ActiveRating>
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
          // style={{position: "relative"}}
          onClick={() => {
            setActiveCard(
              <ActiveWrapper>
                <ActiveImg src={props.poster_path}>
                </ActiveImg>
               
                
                <ActiveMovieInfoWrapper>
                  <ActiveTitle>{props.title}</ActiveTitle>
                  {release()}
                  {rating()}
                  <div style={{overflowWrap: "word-break"}}>
                    {description()}
                  </div>
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
          <MovieImg history src={props.poster_path}>

          </MovieImg>
            
            {userRating()}
            {averageRatingInfo()}
        </MovieElementWrapper>
          
            
           
          
       
        
    )
}