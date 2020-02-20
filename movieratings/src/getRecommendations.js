import PropTypes from "prop-types"


export async function getRecommendations(likedTitles, watchedTitles) {
    console.log(likedTitles)
    const IDs = likedTitles.map(item => {
      return item.movieData.id;
      
    });
    
    
  
  // All await lists returns the resolved .json() promise and saves the results to the list (one by one)
    const list1 = await fetch(`https://api.themoviedb.org/3/movie/
          ${IDs[0]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
      res => res.json()
    );
  
    const list2 = await fetch(`https://api.themoviedb.org/3/movie/
          ${IDs[1]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
      res => res.json()
    );
  
    const list3 = await fetch(`https://api.themoviedb.org/3/movie/
          ${IDs[2]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
      res => res.json()
    );
  
    const list4 = await fetch(`https://api.themoviedb.org/3/movie/
         ${IDs[3]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
      res => res.json()
  );
  
    const list5 = await fetch(`https://api.themoviedb.org/3/movie/
        ${IDs[4]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
      res => res.json()
    );
  
    // all the lists (array of objects) get saved and spread to results -> One array with all results
    const results = [...list1.results, ...list2.results, ...list3.results, ...list4.results, ...list5.results];
    // save a new array with all ids 
    const ids = results.map(movieData => movieData.id);
  
    /* 
      1: creates a new id array without any dupes 
      2: filter the array to only in display titles not found in the watchedTitles 
      3: map the new array (without any dupes / already watched titles) to the correlating movie information in the results array
      4: return: Array with all the movieData without dupes / already seen titles
    */
    const resultsWithoutDupes = [...new Set(results.map(movieData => movieData.id))]
      .filter(id => !watchedTitles.find(movie => movie === id))
      .map(id => results.find(movie => movie.id === id));
  
    /*
      1: creates a "rankings" array. Maps through array creating and ID check for each movie ID and 
      a Count to see how often that movie ID occurs in the ids array (contains dupes).
      Returns an object with the movie data (movie) and the count
  
      2: sorts through the new array checking if the count (of current obj) isnt the same as the next obj and 
      sorts the array according to highest count. 
      Then also sorts the lest with the highest vote_average at the top of the array
  
      3: maps the array (sorten after highest count / vote_average) to remove the "count" key
  
      4: slice the array to only show the top __ results
  
      5: Returns the array 
    */
    const rankings = resultsWithoutDupes
      .map(movie => {
        const id = movie.id;
        const count = ids.filter(movieIds => movieIds === id).length;
        return { movie: movie, count };
      })
      .sort((a, b) => {
        if (a.count !== b.count) return b.count - a.count;
        return b.movie.vote_average - a.movie.vote_average;
      })
      .map(movieData => movieData.movie)
      .slice(0, 10);
      
    return rankings;

   
  
  
}


getRecommendations.propTypes = {
  likedTitles: PropTypes.array,
  watchedTitles: PropTypes.array
}





/*

WANT TO IMPLEMENT THIS FUNCTION
function getLocalStorage(){
  var archive = [],
          keys = Object.keys(localStorage),
          i = 0, key;

      for (; key = keys[i]; i++) {
          archive.push(JSON.parse(localStorage.getItem(key)))
      
  
      
  }
  return archive
}
  

  THIS RETRIEVES AN ARRAY WITH ALL THE VIEWED (rated) MOVIE INFORMATION
*/