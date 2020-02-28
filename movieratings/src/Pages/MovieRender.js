import React from "react"
import MovieSearched from "../Components/MovieSearched"
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
    const {searchTarget, activeCard, searchLanguage} = useContext(Context)




    let title = searchTarget
    let language = searchLanguage
    useAsync(async () => {
        const results =  await getSearchResults(title, language)
        
            setFoundSearchItems(results.results)
    
        
    }, [searchTarget])



    let results =  foundSearchItems.map(item => 
        <MovieSearched 
                key={item.id} 
                poster_path={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                title={item.title} 
                release_date={item.release_date}
                vote_average={item.vote_average}
                overview={item.overview}
                genreIds={item.genre_ids}
                id={item.id}
                ></MovieSearched>)

    return(
        <div className="MovieCardFlex">
            {activeCard ? activeCard : results}
        </div>
    )
}

export default MovieRender