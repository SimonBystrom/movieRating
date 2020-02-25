import React,{useContext} from 'react'
import useHover from "../Hooks/useHover"
import StarRating from "./StarRating"
import BackArrow from "./BackArrow"
import {Context} from "../Context"
import HoverUserRating from "../Hover Elements/HoverUserRating"


/*
    style the userRating function 
    add more hover info if necesary 
*/

//Movie Card Component

export default function MovieHistory(props){
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
            <img
                style={{display: "block"}}
                src={props.poster_path}
                width="185"
                heigh="250">
                </img>
            {userRating()}
        </div>
        
    )
}