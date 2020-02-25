import React, { useState, useContext } from "react";
import { useAsync } from "react-use";
import { Context } from "../Context";

import { getRecommendations } from "../getRecommendations";
import { getLocalStorage } from "../getLocalStorage"
import BackArrow from "../Components/BackArrow"
import MovieRecommendations from "../Components/MovieRecommendations"

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


// Creates the JSX from the items we got from getRecommendations
  // let recommendationsRender = recommendations.map(item => (
  //   <div
  //     key={item.id}
  //     // onClick Creates the active card
  //     onClick={() => {
  //       setActiveCard(
  //         <div>
  //           <BackArrow />
  //           <div>
  //             <img
  //               alt=""
  //               src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
  //             ></img>
  //             <h1>{item.title}</h1>
  //             <small>Release Date: {item.release_date}</small>
  //             <h4>Rating: {item.vote_average}</h4>
  //             <p>{item.overview}</p>
  //             <div>{generateGenreIDs(item.genre_ids)}</div>
              
  //           </div>
  //         </div>
  //       );
  //       //set window view back to normal non-scrolled
  //       window.scrollTo(0, 0);
  //     }}
  //   >
  //     <img
  //       alt=""
  //       src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
  //       width="270"
  //       heigh="450"
  //     ></img>
  //   </div>
  // ))

  let results = recommendations.map(item => 
    <MovieRecommendations
      key={item.id} 
      poster_path={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
      title={item.title} 
      releaseDate={item.release_date}
      voteAverage={item.vote_average}
      overview={item.overview}
      genreIds={item.genre_ids}
      id={item.id}
      ></MovieRecommendations>)

  console.log(recommendations)
  return (
    <div className="MovieCardFlex">
    
      {activeCard ? activeCard : results}
    
    
    </div>
  )
}

export default Recommendations;
