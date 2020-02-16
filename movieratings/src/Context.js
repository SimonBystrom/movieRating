import React,{ createContext, useEffect, useState } from "react"

/* 

*/

const Context = createContext()

function ContextProvider({children}) {
    const [genreList, setGenreList] = useState()
    const [searchTarget, setSearchTarget] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [activeCard, setActiveCard] = useState()
   
   
// pulls genre list array
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US")
            .then(res => res.json())
            .then(data => {
                setGenreList(data.genres)
            })
    }, [])
    
    
    function generateGenreIDs(item){
        let genre = ""
        

        //loops over all the genre_id's for the selected activeMovieCard
            for(let i = 0; i < item.length; i++){
                // filters the genrelist for matches to the activeMovieCards genre_id's and adds them to 'genre'
                genreList.filter(id => {
                    if(id.id === item[i]){
                        genre += id.name + ","
                    }
                })
                
                
            }
            //creates split seperated array of the string values in genre and maps over them creating a <span> for each
            return genre.split(",").map(g => ( <span className="genre" key={g}>{g}</span> ))
        }

    function searchMovie(e){
        setSearchInput(e.target.value)

        //Adding this line makes search be more "interactive" similar to Netflix -> Creates new search with every keystroke
    //  setSearchTarget(searchInput)
        console.log(searchInput)
    //resets the active card to allow new search
        setActiveCard(null)
        
    }

    

    function submitSearch(e){
        e.preventDefault()
        setSearchTarget(searchInput)
        console.log(searchTarget)
        
    }

    function clearSearch(){
        setSearchTarget("")
        setSearchInput("")
    }

    function returnPreviousPage(){
        setActiveCard(null)
    }

 

    
    return (
        <Context.Provider value={{
                                searchTarget, 
                                searchInput,
                                searchMovie,
                                submitSearch,
                                setActiveCard,
                                activeCard,
                                clearSearch,
                                generateGenreIDs,
                                genreList,
                                returnPreviousPage}}>
            {children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}

