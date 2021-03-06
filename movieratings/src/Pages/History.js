import React, {useState, useContext} from "react"
import { getLocalStorage } from "../getLocalStorage"
import { Context } from "../Context";
import MovieHistory from "../Components/MovieHistory"

import {MovieWrapper} from "../StyledComponents/MovieCardStyles"


/*
    Renders the History or the selected Movie Card
*/

export default function History(){
    const [watchedTitles, setWatchedTitles] = useState(getLocalStorage())
    const {activeCard} = useContext(Context)

    console.log(watchedTitles)

// Maps over the watched titles (local storage) -> display MovieHistory
    let results = watchedTitles.map(item => 
      <MovieHistory
              key={item.movieData.id} 
              poster_path={item.movieData.poster_path} 
              title={item.movieData.title} 
              release_date={item.movieData.release_date}
              vote_average={item.movieData.vote_average}
              overview={item.movieData.overview}
              genre_ids={item.movieData.genre_ids}
              id={item.movieData.id}
              ></MovieHistory>)

    return(

        <MovieWrapper>
            {activeCard ? activeCard : results}
        
        </MovieWrapper>
      
    )
}

