import React, { useState, useContext } from "react";
import { useAsync } from "react-use";
import { Context } from "../Context";

import { getRecommendations } from "../getRecommendations";
import { getLocalStorage } from "../getLocalStorage"
import MovieRecommendations from "../Components/MovieRecommendations"

import {MovieWrapper} from "../StyledComponents/MovieCardStyles"



// Renders the Recommendations 

function Recommendations() {
  const {activeCard} = useContext(Context);
  const [recommendations, setRecommendations] = useState([]);
  

let ratedTitles = getLocalStorage()
let watchedTitles = getLocalStorage().map(item => 
  {
  
  return item.movieData.id
})

// Fetches recommendations based on top 5 rated movies in LocalStorage
  useAsync(async () => {
    const recommendationList = await getRecommendations(ratedTitles, watchedTitles);
    setRecommendations(recommendationList);
  }, []);


  let results = recommendations.map(item => 
    <MovieRecommendations
      key={item.id} 
      poster_path={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
      title={item.title} 
      release_date={item.release_date}
      vote_average={item.vote_average}
      overview={item.overview}
      genre_ids={item.genre_ids}
      id={item.id}
      ></MovieRecommendations>)

  console.log(recommendations)
  return (

    <MovieWrapper recommendations>

      {activeCard ? activeCard : results}
    </MovieWrapper>
   
  )
}

export default Recommendations;
