import React, { useState, useContext } from "react";
import { useAsync } from "react-use";
import { Context } from "../Context";

import { getRecommendations } from "../getRecommendations";
import BackArrow from "./BackArrow"

/* 
  Recommendations needs to get information to feed into the getRecommendation call in the useAsync function
*/

//test list of highly rated titles
const testList = [
  {
    title: "Moana",
    id: 277834,
    genre_id: [80, 9648, 53],
    rating: 9.4
  },

  {
    title: "The Usual Suspects",
    id: 629,
    genre_id: [18, 80, 53],
    rating: 9.2
  },

  {
    title: "Frozen",
    id: 109445,
    genre_id: [18, 80],
    rating: 9.0
  }
];

const testWatched = [{ id: 500 }];

function Recommendations() {
  const { setActiveCard, activeCard, generateGenreIDs } = useContext(Context);
  const [recommendations, setRecommendations] = useState([]);

// won't do anything until we get the recommendations Array from getRecommendations
  useAsync(async () => {
    const recommendationList = await getRecommendations(testList, testWatched);
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
  return (
    <div className="MovieCardFlex">
    
      {activeCard ? activeCard : recommendationsRender}
    
    
    </div>
  )
}

export default Recommendations;
