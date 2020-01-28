import React, { useState, useEffect} from "react"


/*
1: fix incoming prop to set the query for the search term
2: properly render the genres (using <span> tags)
2.1: get the genre key array from a context call
*/


function MovieCard(props){
    const [movieData, setMovieData] = useState([])

    const movideIdTarget="Frozen"
    const urlMovieData = `https://api.themoviedb.org/3/search/movie?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&query=${movideIdTarget}&page=1&include_adult=false`
    useEffect(() => {
        fetch(urlMovieData)
            .then(res => res.json())
            .then(data => setMovieData(data.results[0]))

    }, [])

    const {
        title,
        release_date,
        overview,
        poster_path,
        genre_ids,
        vote_average
    } = movieData



    return (
        // Main container
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}></img>
            <div></div>
            {/*Movie info container */}
            <div>
                <h1>{title}</h1>
                <small>Release Date: {release_date} </small>
                <h4>Rating: {vote_average}</h4>
                <p>{overview}</p>
                {/*Genre info */}
                <div>
                    Genre info
                </div>
            </div>
        </div>
    )
}

export default MovieCard