import React,{ createContext, useEffect, useState } from "react"

/* 
1: call API endpoint to get the generelist info -> give to the MovieCard component to so we can render it properly! 
*/

const Context = createContext()

function ContextProvider({children}) {
    
    //const [genreList, setGenreList] = useState()

     // Makes API call to get GenreList info and MovieData

     //const urlGenreList = "https://api.themoviedb.org/3/genre/movie/list?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US"
     //const urlMovieData = `https://api.themoviedb.org/3/search/movie?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&query=${movieID}&page=1&include_adult=false`
   
    

    
    return (
        <Context.Provider value="">
            {children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}

