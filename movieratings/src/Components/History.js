import React, {useState} from "react"
import { getLocalStorage } from "../getLocalStorage"


/*
1: add styling (includes hover feature)
*/

export default function History(){
    const [watchedTitles, setWatchedTitles] = useState(getLocalStorage())

    console.log(watchedTitles)

    let render = watchedTitles.map(item => 
        <div
         key={item.movieData.id}
        >
            <img 
                alt=""
                src={`https://image.tmdb.org/t/p/w500/${item.movieData.poster_path}`}
                width="185"
                height="250"
                
            ></img>
            
        </div>)

    return(
        <div className="MovieCardFlex">
            {render}
        </div>
    )
}


/*

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

*/