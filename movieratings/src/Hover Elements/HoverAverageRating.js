import React from "react"

import AverageRatingImg from "../StyledComponents/AverageRatingImg"


export default function HoverAverageRating(averageRating){
    if(averageRating >= 7.5){
        return  <AverageRatingImg good className="ri-emotion-happy-line"></AverageRatingImg>
    } else if(averageRating >= 6){
        return  <AverageRatingImg ok className="ri-emotion-normal-line"></AverageRatingImg>
    } else if(averageRating < 6){
        return  <AverageRatingImg bad className="ri-emotion-unhappy-line"></AverageRatingImg>
    }
}



