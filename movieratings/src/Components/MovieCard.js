import React, { useState, useEffect, useContext} from "react"
import {Context} from "../Context"
import BackArrow from "./BackArrow"



/*
2: properly render the genres (using <span> tags)
2.1: get the genre key array from a context call
3: add fail state (if API fails to generate any results)
*/


function MovieCard(props){

    const [movieData, setMovieData] = useState()
    const [foundSearchItems, setFoundSearchItems] = useState()
    const {searchTarget, setActiveCard, activeCard, generateIDs, genreList} = useContext(Context)
    

 
    
    const urlMovieData = 
    `https://api.themoviedb.org/3/search/movie?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&query=
    ${searchTarget}&page=1&include_adult=false`
    
    useEffect(() => {
       fetch(urlMovieData)
           .then(res => res.json())
            .then(data =>  {
                //Creates the initial search items
                setFoundSearchItems(data.results.map(item => 
                <div key={item.id} 
                // onClick Creates the active card
                        onClick={() => setActiveCard(
                            <div>
                                <BackArrow />
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></img>
                                    <h1>{item.title}</h1>
                                    <small>Release Date: {item.release_date}</small>
                                    <h4>Rating: {item.vote_average}</h4>
                                    <p>{item.overview}</p>
                                    <div>{generateIDs(item.genre_ids)}</div>
                                </div>
                            </div>)}>

                        <h3>{item.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} width="200" heigh="400"></img>
                    </div>))

                // fills in the movieData info for use when generating the main title
               /* 
                    setMovieData(data.results.map(item => 
                    {
                        return ({
                            title: item.title, 
                            release_date: item.release_date,
                            overview: item.overview,
                            poster_path: item.poster_path,
                            genre_ids: item.genre_ids,
                            vote_average: item.vote_average
                        
                        })
                        
                     } ))
                     */
            })
            .catch(err => {
                console.log(err)
            })
    }, [searchTarget])
    




    return (
        // Main container
        <div className="MovieCardFlex">
            {activeCard ? activeCard : foundSearchItems}
        </div>
    )
    }

export default MovieCard