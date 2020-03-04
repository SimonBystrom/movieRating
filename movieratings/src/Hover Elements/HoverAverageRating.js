import React from "react"

import AverageRatingImg from "../StyledComponents/AverageRatingImg"


export default function HoverAverageRating(averageRating){
    if(averageRating >= 7.5){
        return  <AverageRatingImg className="ri-emotion-happy-line"></AverageRatingImg>
    } else if(averageRating >= 6){
        return  <AverageRatingImg className="ri-emotion-normal-line"></AverageRatingImg>
    } else if(averageRating < 6){
        return  <AverageRatingImg className="ri-emotion-unhappy-line"></AverageRatingImg>
    }
}



