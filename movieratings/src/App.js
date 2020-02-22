import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import MovieCard from "./Components/MovieCard";
import Recommendations from "./Components/Recommendations";
import History from './Components/History'
import { Context } from "./Context";

/* 
  NEXT STEPS
  
  1: Add Footer with The Movie DB logo (legal)
  2: Add onHover (mouse enter) functions for the movieCards displaying average_rating / if watched or not (for search data) / 
   and, maybe, and add to watchlist button (and a watchlist) 
  3: General styling
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
          <History />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
