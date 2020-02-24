

export async function getSearchResults(searchTarget){

    let results = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&query=
    ${searchTarget}&page=1&include_adult=false`).then(res => res.json())

    
    return results
}