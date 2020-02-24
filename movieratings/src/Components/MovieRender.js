import React from "react"
import Movie from "./Movie"
import { useState, useContext } from "react";
import { useAsync } from "react-use";
import { Context } from "../Context";
import {getSearchResults} from "../getSearchResults"


// Renders the results from search by mapping over the results and passing the data as props into the Movie component

/*
    Make it so if there's no results from search show error msg
*/

function MovieRender(){
    const [foundSearchItems, setFoundSearchItems] = useState([])
    const {searchTarget, activeCard} = useContext(Context)




    let title = searchTarget
    useAsync(async () => {
        const results =  await getSearchResults(title)
        
            setFoundSearchItems(results.results)
    
        
    }, [searchTarget])



    let results =  foundSearchItems.map(item => 
        <Movie 
                key={item.id} 
                img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                title={item.title} 
                releaseDate={item.release_date}
                voteAverage={item.vote_average}
                overview={item.overview}
                genreIds={item.genre_ids}
                id={item.id}
                ></Movie>)

    return(
        <div className="MovieCardFlex">
            {activeCard ? activeCard : results}
        </div>
    )
}

export default MovieRender