import React,{ createContext, useEffect, useState } from "react"

/* 
1: call API endpoint to get the generelist info -> give to the MovieCard component to so we can render it properly! 
*/

const Context = createContext()

function ContextProvider({children}) {
    
    const [searchTarget, setSearchTarget] = useState("")
    const [searchInput, setSearchInput] = useState("")
   
   

    function searchMovie(e){
        setSearchInput(e.target.value)
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
                                submitSearch}}>
            {children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}

