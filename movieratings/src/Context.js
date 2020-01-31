import React,{ createContext, useEffect, useState } from "react"

/* 
1: call API endpoint to get the generelist info -> give to the MovieCard component to so we can render it properly! 
2: Set searchTarget back to nothing when going back to Main page 
(when clicking the search bar again after going to a different page, searched results should be cleared)
*/

const Context = createContext()

function ContextProvider({children}) {
    
    const [searchTarget, setSearchTarget] = useState("")
    const [searchInput, setSearchInput] = useState("")
    const [activeCard, setActiveCard] = useState()
   
   

    function searchMovie(e){
        setSearchInput(e.target.value)

    //resets the active card to allow new search
    setActiveCard(null)
        
    }

    

    function submitSearch(e){
        e.preventDefault()
        setSearchTarget(searchInput)
        
    }

    
    return (
        <Context.Provider value={{
                                searchTarget, 
                                searchInput,
                                searchMovie,
                                submitSearch,
                                setActiveCard,
                                activeCard}}>
            {children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}

