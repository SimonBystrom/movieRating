import UserRatingImg from "../StyledComponents/UserRatingImg"
import React from "react"

//Renders a star when hovering a movie if movie has been rated


export default function HoverUserRating(id){
    let storageInfo = JSON.parse(localStorage.getItem(id))
    if(!storageInfo ) {
        return ""
    }
    else if(storageInfo.movieData !== null ) {
        return (
        
            <UserRatingImg className="ri-star-fill"> </UserRatingImg> 
            
       )
    } 
    
}


/* 

*/