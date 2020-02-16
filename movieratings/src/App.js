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
  2: Fix the Recommendations
  3: Add Database saving functionality 
  4: Add Logins? 

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
