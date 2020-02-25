import React, {useState, useContext} from "react"
import { getLocalStorage } from "../getLocalStorage"
import { Context } from "../Context";
import MovieHistory from "../Components/MovieHistory"


/*
1: add styling (includes hover feature)
*/

export default function History(){
    const [watchedTitles, setWatchedTitles] = useState(getLocalStorage())
    const {activeCard} = useContext(Context)

    console.log(watchedTitles)

    let render = watchedTitles.map(item => 
        <div
         key={item.movieData.id}
        >
            <img 
                alt=""
                src={item.movieData.poster_path}
                width="185"
                height="250"
                
            ></img>
            
        </div>)

    let results = watchedTitles.map(item => 
      <MovieHistory
              key={item.movieData.id} 
              poster_path={item.movieData.poster_path} 
              title={item.movieData.title} 
              releaseDate={item.movieData.release_date}
              voteAverage={item.movieData.vote_average}
              overview={item.movieData.overview}
              genreIds={item.movieData.genre_ids}
              id={item.movieData.id}
              ></MovieHistory>)

    return(
        <div className="MovieCardFlex">
            {activeCard ? activeCard : results}
        </div>
    )
}


/*

item => 
        <MovieHistory
                key={item.MovieData.id} 
                img={`https://image.tmdb.org/t/p/w500/${item.movieData.poster_path}`} 
                title={item.movieData.title} 
                releaseDate={item.movieData.release_date}
                voteAverage={item.movieData.vote_average}
                overview={item.movieData.overview}
                genreIds={item.movieData.genre_ids}
                id={item.movieData.id}
                ></MovieHistory>)

                */