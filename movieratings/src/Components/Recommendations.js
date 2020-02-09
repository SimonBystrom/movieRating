import React,{useEffect, useState, useContext} from "react"
import {Context} from "../Context"

import useRecommendations from "../Hooks/useRecommendations"



/* 
1: Top 3 movie Info comes in (array of objects with title, id, genre, rating info)  (R)
2: API calls the get recommendations method -> returns one array with 3 arrays of objects (with all movie info)  (R)
3: Create a "flat" array (R)
4: delete items matching already watched titles   (watchedArr is a flat array with the watched ID's as integers) (r)
4.1: loop over array  and find which titles are repeated (these will go in the recommendation pile)
5: loop over the recommendation pile and put them in order depending on rating
6: Display the movies in order of rating
7: Make movies clickable (activeCard) for more info

*** MOVIE RECOMMENDATION FUNCTION ***
-> to find matches, the titles needs to have matching genres , if not small chance of finding matching movie recommended titles
*/

//test list of highly rated titles
const testList = [
    {
        title: "GoodFellas",
        id: 769,
        genre_id: [
            80,
            9648,
            53
        ],
        rating: 9.4
    },

    {
        title: "The Usual Suspects",
        id: 629,
        genre_id: [
            18,
            80,
            53
        ],
        rating: 9.2
    },

    {
        title: "Apocalypse Now",
        id: 28,
        genre_id: [
            18,
            80
        ],
        rating: 9.0
    }


]

const testWatched = [
    "Se7en",
    "The Usual Suspects",
    "GoodFellas"
]





function Recommendations(){

    const {setActiveCard, activeCard, generateIDs} = useContext(Context)

    const recommendationList = useRecommendations(testList, testWatched)

    

    


    return(
       <div>
       {console.log(recommendationList)}

       </div>
        
    
        
    )
}

export default Recommendations