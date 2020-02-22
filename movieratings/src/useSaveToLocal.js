import {useState, useEffect} from "react"


// saves the selected movie to local storage

export function useSaveToLocal(movieID){
    const [ratedMovies, setRatedMovies] = useState({movieData: {id: 0}})

    useEffect(() => {
        localStorage.setItem(movieID, JSON.stringify(ratedMovies))

    }, [ratedMovies])

    return [ratedMovies, setRatedMovies]
}