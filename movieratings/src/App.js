import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar"
import MovieCard from "./Components/MovieCard"

/* 
1: Create input and submit field to set the search target and pass it as props 
to the MovieCard "properly" ->(without accidently trying to render the MovieCard from Undefined)

*/

function App() {
  //const [movieIdTarget, setMovieIdTarget] = useState("")
  //const [searchInputValue, setSearchInputValue] = useState()

  

  /* 
   <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="searchInputValue"
                value={searchInputValue}
                onChange={handleChange}
                ></input>
            </form>
    */

  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <div>
           
            
            <MovieCard movieID=""></MovieCard>
          </div>
            
        </Route>
        <Route path="/recommendations"><h3>recommendations</h3></Route>
        <Route path="/history"><h3>history</h3></Route>
      </Switch>
    </div>
  );
}

export default App;
