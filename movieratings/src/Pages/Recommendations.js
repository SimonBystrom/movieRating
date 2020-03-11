import React, { useState, useContext } from "react";
import { useAsync } from "react-use";
import { Context } from "../Context";

import { getRecommendations } from "../getRecommendations";
import { getLocalStorage } from "../getLocalStorage"
import BackArrow from "../Components/BackArrow"
import MovieRecommendations from "../Components/MovieRecommendations"

import MovieWrapper from "../StyledComponents/MovieWrapper"

/* 
  1: Styling (includes hover feature)
  2: Stress test actual recommendations (see if I need to tweak the recommendations 'algorhytm')
*/



function Recommendations() {
  const { setActiveCard, activeCard, generateGenreIDs } = useContext(Context);
  const [recommendations, setRecommendations] = useState([]);
  

let ratedTitles = getLocalStorage()
let watchedTitles = getLocalStorage().map(item => 
  {
  
  return item.movieData.id
})

// won't do anything until we get the recommendations Array from getRecommendations
  useAsync(async () => {
    const recommendationList = await getRecommendations(ratedTitles, watchedTitles);
    setRecommendations(recommendationList);
  }, []);


  let results = recommendations.map(item => 
    <MovieRecommendations
      key={item.id} 
      poster_path={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
      title={item.title} 
      releaseDate={item.release_date}
      voteAverage={item.vote_average}
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
