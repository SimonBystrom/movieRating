import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Recommendations from "./Pages/Recommendations";
import History from './Pages/History'
import MovieSearch from "./Pages/MovieSearch"
import Footer from "./Components/Footer"
import { Context } from "./Context";

import {StyledMainInfoWrapper, StyledTitle, StyledDescription, PageContainer, ContentWrapper} from "./StyledComponents/MainInfo"

/* 
  NEXT STEPS
  1: mediaQueries (fix navbar when using phones etc) 
  2: If results is bad ( no hits) return error msg  ??
  3: Strange window.scrollTo() bug in movieElements (history / recommendations / searched)
*/

function App() {
  const { searchTarget, languageOnPage } = useContext(Context);

  const titleJP = "Movie Ratings へようこそ"
  const titleEN = "Welcome to Movie Ratings"

  const descriptionP1JP = "このサイトは映画観賞が好きな方々向けになっております。一緒に映画についての評価をし、トップ5までの映画をオススメしてくれます。"
  const descriptionP1EN = "This site allows couples (or people who like to watch things together), to rate movies together and then get recommendations based on your top 5 rated movies."

  const descriptionP2JP = "初めに二人が好きな映画を探してください。そして、評価をすることです。"
  const descriptionP2EN = "To get started just search for some titles you and your movie watching buddy likes and start giving them ratings!"

  const descriptionP3JP = "そして、映画５本を評価したら、当サイトからオススメの映画が「オススメ」タブに表示されます。"
  const descriptionP3EN = "When you have rated 5 movies you will start seeing recommendations based on your rated movies in the Recommendations tab."

  const descriptionP4JP = "更新されたオススメを変更したい場合は、「履歴」タブのトップ５映画の評価を変えることで「オススメ」も変えることができます。"
  const descriptionP4EN = "If you ever want to change your recommendations, just change the rating of any of your top 5 rated movies in the History tab. "
  return (
    <PageContainer>
      <ContentWrapper>
      <Navbar />

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <StyledMainInfoWrapper homeImg={process.env.PUBLIC_URL + '/img/interstellar.jpg'}>
            
            <StyledTitle mainPage>
              {languageOnPage === "jp" ?  titleJP: languageOnPage === "en-US" ?  titleEN : "Welcome to Movie Ratings"}
              </StyledTitle>

            <div style={{overflowWrap: "word-break"}}>
              <StyledDescription first lang={languageOnPage}>
              {languageOnPage === "jp" ?  descriptionP1JP: languageOnPage === "en-US" ?  descriptionP1EN : ""}
                </StyledDescription>
                <StyledDescription second lang={languageOnPage}>
                {languageOnPage === "jp" ?  descriptionP2JP: languageOnPage === "en-US" ?  descriptionP2EN : ""}
                </StyledDescription>
                
                <StyledDescription third lang={languageOnPage}>
                {languageOnPage === "jp" ?  descriptionP3JP: languageOnPage === "en-US" ?  descriptionP3EN : ""}
                </StyledDescription>
                
                <StyledDescription fourth lang={languageOnPage}>
                {languageOnPage === "jp" ?  descriptionP4JP: languageOnPage === "en-US" ?  descriptionP4EN : ""}
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
              <StyledMainInfoWrapper searchImg={process.env.PUBLIC_URL + '/img/joker.jpg'}>
              
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


