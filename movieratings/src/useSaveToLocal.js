import {useState, useEffect} from "react"


// saves the selected movie to local storage

export function useSaveToLocal(movieID){
    const [ratedMovies, setRatedMovies] = useState(checkForTitle(movieID))

    // Checks if title is already present in storage (so we don't overwrite previous rating by clicking on a title)
    function checkForTitle(id){
        let check = localStorage.getItem(id) 
        if(check !== null){
            return JSON.parse(check)
        } else {
            return {movieData: {id: 0}}
        }
    }

    useEffect(() => {
        localStorage.setItem(movieID, JSON.stringify(ratedMovies))

    }, [ratedMovies])

    return [ratedMovies, setRatedMovies]
}