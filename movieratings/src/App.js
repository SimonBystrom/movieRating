import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Recommendations from "./Pages/Recommendations";
import History from './Pages/History'
import MovieSearch from "./Pages/MovieSearch"
import { Context } from "./Context";

/* 
  NEXT STEPS
  
  1: Add Footer with The Movie DB logo (legal) and (attribute flags see below)
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
              <MovieSearch></MovieSearch>
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


/*
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
*/