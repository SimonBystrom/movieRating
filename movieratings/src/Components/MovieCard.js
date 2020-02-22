import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";
import BackArrow from "./BackArrow";
import StarRating from "./StarRating";

/*
1: Add Styling (includes hover features)
*/

function MovieCard(props) {
  const [foundSearchItems, setFoundSearchItems] = useState();
  const {
    searchTarget,
    setActiveCard,
    activeCard,
    generateGenreIDs
  } = useContext(Context);

  const urlMovieData = `https://api.themoviedb.org/3/search/movie?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&query=
    ${searchTarget}&page=1&include_adult=false`;

  // Generates the search and Active Card onClick
  useEffect(() => {
    fetch(urlMovieData)
      .then(res => res.json())
      .then(data => {
        //Creates the initial search items
        if(data.results.length > 0){setFoundSearchItems(
          data.results.map(item => (
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
                      <StarRating movieData={item} />
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
                width="200"
                heigh="350"
              ></img>
            </div>
          ))
        );} else {
          setFoundSearchItems(<h3>No titles matching search term</h3>)
        }
        
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchTarget, generateGenreIDs, setActiveCard, urlMovieData]);

  return (
    // Main container
    <div className="MovieCardFlex">
      {activeCard ? activeCard : foundSearchItems}
    </div>
  );
}

export default MovieCard;
