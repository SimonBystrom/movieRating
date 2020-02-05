import React,{useEffect, useState, useContext} from "react"
import {Context} from "../Context"


//test list of highly rated titles
const testList = [
    {
        title: "Se7en",
        id: 807,
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
        title: "GoodFellas",
        id: 769,
        genre_id: [
            18,
            80
        ],
        rating: 9.0
    }


]


// generates an array of the ID's of the highly rated titles
const IDs= testList.map(item => {
    return item.id
})



function Recommendations(){
    const [recommendationsList, setRecommendationsList] = useState([])
    const {setActiveCard, activeCard, generateIDs} = useContext(Context)

    
// sets the state for all incoming (convereted to json) data for each fetch method
    function process(prom){
        prom.then(data => {
            setRecommendationsList((prevState) => [...prevState, data.results])
        })
    }
    

    useEffect(()=>{

    //Fetches all the lists of recommendations for the different titles
            let list1 = fetch(`https://api.themoviedb.org/3/movie/
                                ${IDs[0]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`)
        
            let list2 = fetch(`https://api.themoviedb.org/3/movie/
                                ${IDs[1]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`)
            
            let list3 = fetch(`https://api.themoviedb.org/3/movie/
                                ${IDs[2]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`)
        
    /*
    makes a complete return promise that will loop over each returned object 
    and make a json conversation & add the info to recommendation array

    https://www.youtube.com/watch?time_continue=397&v=HTA7pEDGZEU&feature=emb_title
    */
            Promise.all([list1, list2, list3])
                .then(data => {
                    data.forEach(data => {
                        process(data.json())
                    })
                })

    }, [])

    return(
        <div className="MovieCardFlex">
            {}
            {console.log(recommendationsList)}
        </div>
    )
}

export default Recommendations