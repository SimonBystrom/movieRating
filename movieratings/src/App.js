import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import MovieCard from "./Components/MovieCard";
import Recommendations from "./Components/Recommendations";
import { Context } from "./Context";

/* 
  NEXT STEPS
  
  1: Add Footer with The Movie DB logo (legal)
  3: Add Database saving functionality (watchedList)
  3.5: Create a top 3 of the titles in the watchedList according to userSubmitted score / average_rating 
  (sort function similar to the one in getRecommendations)
  4: Add Logins? -> Needs to create database

*/

function App() {
  const { searchTarget } = useContext(Context);

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <h3>Main information of website</h3>
        </Route>
        <Route path="/search/">
          <div>
            {/*conditional render of the movie card if search term active*/}
            {searchTarget.length > 0 ? (
              <MovieCard movieID=""></MovieCard>
            ) : null}
          </div>
        </Route>
        <Route path="/recommendations">
          <Recommendations />
        </Route>
        <Route path="/history">
          <h3>history</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
