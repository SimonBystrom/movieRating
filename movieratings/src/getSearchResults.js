// Fetches search results (used by MovieSearched in it's async method)
import { API_KEY } from './api'

export async function getSearchResults(searchTarget, searchLanguage){
    

    let results = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${searchLanguage}&query=
    ${searchTarget}&page=1&include_adult=false`).then(res => res.json())

    
    return results
}