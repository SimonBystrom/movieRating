import React, { useState } from "react";
import {useSaveToLocal} from "../useSaveToLocal"

import {StarWrapper, StarContainer, StyledSaveButton, StyledStar, StyledUser, Star, Storage} from "../StyledComponents/StarsComp"


/* 
  Renders The Stars for the user to rate selected movies after searching
  Renders a save icon -> saves rating and movie info to LocalStorage
  Renders previous Rating (if any)
*/


function StarRatings({movieData}) {
  const [ratingOne, setRatingOne] = useState();
  const [ratingTwo, setRatingTwo] = useState();
  const [clickedOne, setClickedOne] = useState(false);
  const [clickedTwo, setClickedTwo] = useState(false);
  const [saveButtonClass, setSaveButtonClass] = useState("ri-save-line")
  

  const [ratedMovies, setRatedMovies] = useSaveToLocal(movieData.id)

  const storage = () => {
      if(JSON.parse(localStorage.getItem(movieData.id))){
      return (
          <Storage >{JSON.parse(localStorage.getItem(movieData.id)).rating}</Storage> 
        )
      } else if (!JSON.parse(localStorage.getItem(movieData.id)))
        return ""
    }

  // Generates the unfilled Star
  let star = (user, rating) => {
    return (
      <Star
        onPointerEnter={() => rateMovie(user, rating)}
        //  onClick={() => rateMovie(user, rating)}
        className="ri-star-line"
      ></Star>
    );
  };
  // Generates the filled Star
  let starFilled = (user, rating) => {
    return (
      <Star
        onPointerLeave={() => unRateMovie(user, rating)}
        onClick={() => rateMovie(user, rating)}
        className="ri-star-fill"
        fill
      ></Star>
    );
  };
  // Generates gold star
  let goldStar = () => {
    return <Star className="ri-star-fill" gold></Star>;
  };

  // Generates normal (unclickable) star. (used after rating has been set)
  let normalStar = () => {
    return <Star 
              className="ri-star-line"
              >

            </Star>;
  };

  // onClick function -> runs the localStorage save function ()
  function saveRating(movieData, ratingOne, ratingTwo) {
    //information gets saved to server
    let data = {movieData, rating: (ratingOne + ratingTwo) / 2}
    setRatedMovies(data)
    
  }

  // PointerEnter function for the star -> sets Rating for the user -> fills in star
  function rateMovie(user, rating) {
    if (user === "user1") {
      setRatingOne(rating);
    } else if (user === "user2") {
      setRatingTwo(rating);
    }
    console.log(ratingOne, ratingTwo);
  }
  // PointerLeave function for the star -> when leaving active star unfills the left star
  function unRateMovie(user, rating) {
    if (user === "user1") {
      setRatingOne(rating - 1);
    } else if (user === "user2") {
      setRatingTwo(rating - 1);
    }

    console.log(ratingOne, ratingTwo);
  }

  // Conditional rendering for the stars
  let starRender = (user, rating) => {
    return rating === 1 ? (
      <div>
        {starFilled(user, 1)}
        {star(user, 2)}
        {star(user, 3)}
        {star(user, 4)}
        {star(user, 5)}
      </div>
    ) : rating === 2 ? (
      <div>
        {starFilled(user, 1)}
        {starFilled(user, 2)}
        {star(user, 3)}
        {star(user, 4)}
        {star(user, 5)}
      </div>
    ) : rating === 3 ? (
      <div>
        {starFilled(user, 1)}
        {starFilled(user, 2)}
        {starFilled(user, 3)}
        {star(user, 4)}
        {star(user, 5)}
      </div>
    ) : rating === 4 ? (
      <div>
        {starFilled(user, 1)}
        {starFilled(user, 2)}
        {starFilled(user, 3)}
        {starFilled(user, 4)}
        {star(user, 5)}
      </div>
    ) : rating === 5 ? (
      <div>
        {starFilled(user, 1)}
        {starFilled(user, 2)}
        {starFilled(user, 3)}
        {starFilled(user, 4)}
        {starFilled(user, 5)}
      </div>
    ) : (
      <div>
        {star(user, 1)}
        {star(user, 2)}
        {star(user, 3)}
        {star(user, 4)}
        {star(user, 5)}
      </div>
    );
  };

  // Conditional rendering for the Gold Stars
  let goldStarRender = (user, rating) => {
    return rating === 1 ? (
      <div>
        {goldStar()}
        {normalStar()}
        {normalStar()}
        {normalStar()}
        {normalStar()}
      </div>
    ) : rating === 2 ? (
      <div>
        {goldStar()}
        {goldStar()}
        {normalStar()}
        {normalStar()}
        {normalStar()}
      </div>
    ) : rating === 3 ? (
      <div>
        {goldStar()}
        {goldStar()}
        {goldStar()}
        {normalStar()}
        {normalStar()}
      </div>
    ) : rating === 4 ? (
      <div>
        {goldStar()}
        {goldStar()}
        {goldStar()}
        {goldStar()}
        {normalStar()}
      </div>
    ) : rating === 5 ? (
      <div>
        {goldStar()}
        {goldStar()}
        {goldStar()}
        {goldStar()}
        {goldStar()}
      </div>
    ) : (
      <div>
        {star(user, 1)}
        {star(user, 2)}
        {star(user, 3)}
        {star(user, 4)}
        {star(user, 5)}
      </div>
    );
  };

  return (

    <StarWrapper>
      <div >
        <StyledUser >User 1  </StyledUser>
        <StyledUser >User 2  </StyledUser>
      </div>
      
      
      <StarContainer>
        
          
          <div onClick={() => {
          if(!clickedOne){
            setClickedOne(true)}
          else if(clickedOne){
            setClickedOne(false)
            setRatingOne(0)
          }
            }}>
          {clickedOne
            ? goldStarRender("user1", ratingOne)
            : starRender("user1", ratingOne)}
          </div>
        
        

        <div onClick={() => {
          if(!clickedTwo){
            setClickedTwo(true)}
          else if(clickedTwo){
            setClickedTwo(false)
            setRatingTwo(0)
          }
            }}>
          {clickedTwo
            ? goldStarRender("user2", ratingTwo)
            : starRender("user2", ratingTwo)}
        </div>
      </StarContainer>
      <StyledSaveButton
          className={saveButtonClass}
          onClick={() => {
            saveRating(movieData, ratingOne, ratingTwo)
            setSaveButtonClass("ri-checkbox-circle-line")
            }}
      > </StyledSaveButton>
      <StyledStar className="ri-star-fill"></StyledStar>
      
      {storage()}

    </StarWrapper>
    
  );
}

export default StarRatings;
