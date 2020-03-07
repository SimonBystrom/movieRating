import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Recommendations from "./Pages/Recommendations";
import History from './Pages/History'
import MovieSearch from "./Pages/MovieSearch"
import Footer from "./Components/Footer"
import { Context } from "./Context";

import Background from "./BackgroundImage/interstellar-web.jpg"
import SearchBackground from "./BackgroundImage/fight-club-web.jpg"
import {StyledMainInfoWrapper, StyledTitle, StyledDescription} from "./StyledComponents/MainInfo"

/* 
  NEXT STEPS
  
  1: Add Footer with The Movie DB logo (legal) and (attribute flags see below)
  2: Style Active card with delete button for History and function back button for all 
  3: Style Genre Spans
  4: Make it so when searching for title's (before finding title) display Text /image 
  5: If results is bad ( no hits) return error msg 
  6: Style average user rating to show green for good rating , yellow for so-and-so, and red for bad
*/

function App() {
  const { searchTarget } = useContext(Context);

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <StyledMainInfoWrapper>
            <img src={Background} style={{width: "100%", height: "100%"}}></img>
            <StyledTitle mainPage>Welcome to Movie Ratings</StyledTitle>
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
            ) : (
              <StyledMainInfoWrapper>
                 
                <img src={SearchBackground}></img>
                <StyledTitle searchPage>Search for Movies titles...</StyledTitle> 
              </StyledMainInfoWrapper>
               )}
          </div>
        </Route>
        <Route path="/recommendations">
          <Recommendations />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;


