import React, {useEffect, useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"



/*
1: Make it so the information (movie data) in filteredRecommendations (movieArr) 
can be saved to state without causing infinite loop 
2: map over said array to create cards

(right now the useRecommendations function runs 4 times -> 1st nothing in noFilter, then 1 arr , 2 arr, 3 arr) WHY??
*/



function useRecommendations(likedTitles, watchedTitles){
    const [noFilterRecommendation, setNoFilterRecommendation] = useState([])
    const [list, setList] = useState([])
   

    const {setActiveCard, generateIDs} = useContext(Context)


// generates an array of the ID's of the highly rated titles



    

    useEffect(() => {
    //Fetches all the lists of recommendations for the different titles

            const IDs = likedTitles.map(item => {
                return item.id
                })

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
                    .then(res => {
                        res.forEach(data => {
                            process(data.json())
                            
                            })
                        })
                    .catch(error => {
                        console.log(error)
                        })
    // sets the state for all incoming (convereted to json) data for each fetch promise

                function process(prom){
                    prom.then(data => {
                        setNoFilterRecommendation((prevState) => [...prevState, data.results])
                        

                    })
                    
            }
            

    }, [])

        

    


    function filterRecommendations(recArr, watchedArr) {

        // Finds duplicates by accepting arr -> filter by only adding items which the IndexOf of certain item doesnt match the current index
            let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
            let idArr = []
            let movieArr = []
            let flatArr = recArr.flat()
        //add id's to the idArr 

            flatArr.forEach(movie => idArr.push(movie.id))
        // filters the array with finDuplicates and then removes any duplicates in said array with new Set method
        // creates a unique ID's array with only repeated titles (https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array)
            idArr = [...new Set(findDuplicates(idArr))]

            idArr = idArr.filter(id => !watchedArr.includes(id))

            
            idArr.map(item => {
                flatArr.forEach(data => {
                    if(data.id === item){
                            if(!movieArr.includes(data.title)){
                                movieArr.push(data.title)
                            }
                        }
                    }
                )
                
                }
            )
                       
            
                let recommendationArr = []
                movieArr
                .map(item => {
                    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&query=
                        ${item}&page=1&include_adult=false`)
                        .then(res => res.json())
                        .then(data => recommendationArr.push(data.results[0]))
                })
                
           console.log(recommendationArr)
       
    }


    
    return filterRecommendations(noFilterRecommendation, watchedTitles)

    //return filterRecommendations(noFilterRecommendation, watchedTitles, getRecommendationData)
    
}


export default useRecommendations


useRecommendations.propTypes = {
    likedTitles: PropTypes.array.isRequired,
    watchedArr: PropTypes.array.isRequired
}



/*

setTestRecommendation(recommendationArr.map(
            item => 
                <div key={item.id} 
                // onClick Creates the active card
                        onClick={() => setActiveCard(
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></img>
                                <h1>{item.title}</h1>
                                <small>Release Date: {item.release_date}</small>
                                <h4>Rating: {item.vote_average}</h4>
                                <p>{item.overview}</p>
                                <div>{generateIDs(item.genre_ids)}</div>
                            </div>)}>

                        <h3>{item.title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} width="200" heigh="400"></img>
                    </div>))
        
*/


// make the filter work without creating infinite loop



    