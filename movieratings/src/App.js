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
import {StyledMainInfoWrapper, StyledTitle, StyledDescription, PageContainer, ContentWrapper} from "./StyledComponents/MainInfo"

/* 
  NEXT STEPS
  2: mediaQueries 
  5: If results is bad ( no hits) return error msg  ??
  6: Add so pushing the Japanese / English Button Translates First page into English / Japanese (ThemeProvider through context)
*/

function App() {
  const { searchTarget } = useContext(Context);

  return (
    <PageContainer>
      <ContentWrapper>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <StyledMainInfoWrapper>
            <img src={Background} style={{ height: "100%"}}></img>
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
      </ContentWrapper>

      <Footer />
    </PageContainer>
  );
}

export default App;


