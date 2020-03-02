import UserRatingImg from "../StyledComponents/UserRatingImg"
import React from "react"
//Fix so movies looked at but not rated also returns something 


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