import React, {useState, useContext} from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar"
import MovieCard from "./Components/MovieCard"
import SearchBar from "./Components/SearchBar"
import {Context} from "./Context"

/* 
  NEXT STEP
*/

function App() {
 
  const {searchTarget} = useContext(Context)


  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path="/">
          <div>
            <SearchBar />
            {/*conditional render of the movie card if search term active*/}
            {searchTarget.length > 0 ? <MovieCard movieID=""></MovieCard> : null}
            
          </div>
            
        </Route>
        <Route path="/recommendations"><h3>recommendations</h3></Route>
        <Route path="/history"><h3>history</h3></Route>
      </Switch>
    </div>
  );
}

export default App;
