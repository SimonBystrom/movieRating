import React, {useState} from "react"


// streamline the declaration of the stars by making in into a function that renders the stars and takes the user as a parameter?


function StarRatings(){
    const [ratingOne, setRatingOne] = useState()
    const [ratingTwo, setRatingTwo] = useState()


    let star1 =   
        <i          
            //onHover={} 
            onClick={() => rateMovie("user1", 1)}
            className="ri-star-line"
        ></i>

    let star1Filled = 
        <i 
            className="ri-star-fill"
        ></i>

    let star2 =   
        <i          
            //onHover={} 
            onClick={() => rateMovie("user1", 2)}
            className="ri-star-line"
        ></i>

    let star2Filled = 
        <i 
            className="ri-star-fill"
        ></i>


    let star3 =   
        <i          
            //onHover={} 
            onClick={() => rateMovie("user1", 3)}
            className="ri-star-line"
        ></i>

    let star3Filled = 
        <i 
            className="ri-star-fill"
        ></i>


    let star4 =   
        <i          
            //onHover={} 
            onClick={() => rateMovie("user1", 4)}
            className="ri-star-line"
        ></i>

    let star4Filled = 
        <i 
            className="ri-star-fill"
        ></i>


    let star5 =   
        <i          
            //onHover={} 
            onClick={() => rateMovie("user1", 5)}
            className="ri-star-line"
        ></i>

    let star5Filled = 
        <i 
            className="ri-star-fill"
        ></i>


      

    function rateMovie(user, rating){
        if(user === "user1"){
            setRatingOne(rating)
        } else if(user === "user2"){
            setRatingTwo(rating)
        }
        console.log(ratingOne, ratingTwo)
    }
    return (
        <div className="stars-container">
            {
                ratingOne === 1 ? 
                    <div>{star1Filled}{star2}{star3}{star4}{star5}</div> 
                : 
                ratingOne === 2 ?
                    <div>{star1Filled}{star2Filled}{star3}{star4}{star5}</div> 
                :
                ratingOne === 3 ?
                    <div>{star1Filled}{star2Filled}{star3Filled}{star4}{star5}</div>
                :
                ratingOne === 4 ?
                    <div>{star1Filled}{star2Filled}{star3Filled}{star4Filled}{star5}</div>
                :
                ratingOne === 5 ?
                    <div>{star1Filled}{star2Filled}{star3Filled}{star4Filled}{star5Filled}</div>
                :
                <div>{star1}{star2}{star3}{star4}{star5}</div>

            }
           
             

        </div>
    )
}

export default StarRatings


/*
nonfill
<i class="ri-star-line"></i>
fill
<i class="ri-star-fill"></i>
half
<i class="ri-star-half-fill"></i>

*/