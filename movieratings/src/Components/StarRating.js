import React, {useState} from "react"
import { checkPropTypes } from "prop-types"




function StarRatings(movieData){
    const [ratingOne, setRatingOne] = useState()
    const [ratingTwo, setRatingTwo] = useState()
    
// Generates the unfilled Star
    let star =   (user, rating) => {
        return(
        <i          
            //onMouseOut={() => console.log("unhovered")}
            // onPointerEnter={() => rateHover(user, rating)} 
            
            onClick={() => rateMovie(user, rating, false)}
            className="ri-star-line"
        ></i>)
    }
// Generates the filled Star
    let starFilled = (user, rating) => {
        return(
            <i          
            //onHover={} 
            onClick={() => rateMovie(user, rating)}
            className="ri-star-fill"
            ></i>
        )
    }

// onClikc function for the saved ratings
    function saveRating(data){

    //information gets saved to server 

        console.log(ratingOne, ratingTwo)
        console.log(data.movieData)
    }
  
// onClick function for the star -> sets Rating for the user -> fills in star
    function rateMovie(user, rating){
        if(user === "user1"){
            setRatingOne(rating)
        } else if(user === "user2"){
            setRatingTwo(rating)
        } 
        console.log(ratingOne, ratingTwo)
       
    }

// Conditional rendering for the stars
    let starRender = (user, rating) => 
    {
        
        
                return(
                    rating === 1 ? 
                        <div>{starFilled(user, 1)}{star(user, 2)}{star(user, 3)}{star(user, 4)}{star(user, 5)}</div> 
                    : 
                    rating === 2 ?
                        <div>{starFilled(user, 1)}{starFilled(user, 2)}{star(user, 3)}{star(user, 4)}{star(user, 5)}</div>
                    :
                    rating === 3 ?
                        <div>{starFilled(user, 1)}{starFilled(user, 2)}{starFilled(user, 3)}{star(user, 4)}{star(user, 5)}</div>
                    :
                    rating === 4 ?
                        <div>{starFilled(user, 1)}{starFilled(user, 2)}{starFilled(user, 3)}{starFilled(user, 4)}{star(user, 5)}</div>
                    :
                    rating === 5 ?
                        <div>{starFilled(user, 1)}{starFilled(user, 2)}{starFilled(user, 3)}{starFilled(user, 4)}{starFilled(user, 5)}</div>
                    :
                        <div>{star(user, 1)}{star(user, 2)}{star(user, 3)}{star(user, 4)}{star(user, 5)}</div>
                )
            
            
        
            

    }


    return (
        <div>
            <div className="stars-container">
            
                <div> 
                {
                starRender("user1", ratingOne)
                    }
                </div>
            
            

                <div> 
                {
                starRender("user2", ratingTwo)
                    }
                </div>

            </div>
            <button onClick={() => saveRating(movieData)}>Save</button>
        </div>
    )
}

export default StarRatings



