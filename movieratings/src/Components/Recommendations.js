import React, { useState, useContext } from "react";
import { useAsync } from "react-use";
import { Context } from "../Context";

import { getRecommendations } from "../getRecommendations";
import BackArrow from "./BackArrow"

/* 
  Move the getLocalStorage into a hook -> use the data from the hook instead
*/


// "fetches" localStorage items and sorts them into an array based on userRating
function getLocalStorage(){
  var archive = [],
          keys = Object.keys(localStorage),
          i = 0, key;

      for (; key = keys[i]; i++) {
          archive.push(JSON.parse(localStorage.getItem(key)))
          
  }
  
  archive.sort((a, b) => {
    if (a.rating !== b.rating) return b.rating - a.rating;
  })

  console.log(archive)
  return archive
}

let ratedTitles = getLocalStorage()
let watchedTitles = getLocalStorage().map(item => 
  {
  
  return item.movieData.id
})



function Recommendations() {
  const { setActiveCard, activeCard, generateGenreIDs } = useContext(Context);
  const [recommendations, setRecommendations] = useState([]);

// won't do anything until we get the recommendations Array from getRecommendations
  useAsync(async () => {
    const recommendationList = await getRecommendations(ratedTitles, watchedTitles);
    setRecommendations(recommendationList);
  }, []);


// Creates the JSX from the items we got from getRecommendations
  let recommendationsRender = recommendations.map(item => (
    <div
      key={item.id}
      // onClick Creates the active card
      onClick={() => {
        setActiveCard(
          <div>
            <BackArrow />
            <div>
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              ></img>
              <h1>{item.title}</h1>
              <small>Release Date: {item.release_date}</small>
              <h4>Rating: {item.vote_average}</h4>
              <p>{item.overview}</p>
              <div>{generateGenreIDs(item.genre_ids)}</div>
              
            </div>
          </div>
        );
        //set window view back to normal non-scrolled
        window.scrollTo(0, 0);
      }}
    >
      <img
        alt=""
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        width="270"
        heigh="450"
      ></img>
    </div>
  ))

  console.log(recommendations)
  return (
    <div className="MovieCardFlex">
    
      {activeCard ? activeCard : recommendationsRender}
    
    
    </div>
  )
}

export default Recommendations;
