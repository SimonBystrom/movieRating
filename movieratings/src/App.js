import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar"


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path="/"><h3>main</h3></Route>
        <Route path="/recommendations"><h3>recommendations</h3></Route>
        <Route path="/history"><h3>history</h3></Route>
      </Switch>
    </div>
  );
}

export default App;
