import React,{ createContext } from "react"

const Context = createContext()

function ContextProvider({children}) {

    return (
        <Context.Provider value="">
            {children}
        </Context.Provider>
    )
}

export  {ContextProvider, Context}