import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Recommendations from "./Pages/Recommendations";
import History from './Pages/History'
import MovieSearch from "./Pages/MovieSearch"
import { Context } from "./Context";

import Background from "./BackgroundImage/interstellar.jpg"
import {StyledMainInfoWrapper, StyledTitle, StyledDescription} from "./StyledComponents/MainInfo"

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
          <StyledMainInfoWrapper>
            <img src={Background}></img>
            <StyledTitle>Welcome to Movie Ratings</StyledTitle>
            <div style={{overflowWrap: "word-break"}}>
              <StyledDescription first>This site allows couples (or people who like to watch things together), 
                to rate movies together and then get recommendations based on your top 5 rated movies. 
                </StyledDescription>
                <StyledDescription second>
                  To get started just search for some titles you and your movie watching buddy likes and start
                  giving them ratings!
                </StyledDescription>
                
                <StyledDescription third>
                  When you have rated 5 movies you will start seeing recommendations based on your rated movies
                  in the Recommendations tab.
                </StyledDescription>
                
                <StyledDescription fourth>
                  If you ever want to change your recommendations, just change the rating of any of your top 5 rated movies
                  in the History tab. 
                </StyledDescription>
                
            </div>
          </StyledMainInfoWrapper>
          
        </Route>
        <Route path="/search/">
          <div>
            {/*conditional render of the movie card if search term active*/}
            {searchTarget.length > 0 ? (
              <MovieSearch></MovieSearch>
            ) : <h3 style={{color: "white"}}>Please Search for title</h3>}
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
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/