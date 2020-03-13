// Fetches search results (used by MovieSearched in it's async method)

export async function getSearchResults(searchTarget, searchLanguage){
    

    let results = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab85baadb27ea7d2eade887860bfa03a&language=${searchLanguage}&query=
    ${searchTarget}&page=1&include_adult=false`).then(res => res.json())

    
    return results
}