import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import ChampionShow from "./pages/ChampShow";
import ChampInfo from "./pages/ChampInfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/championinfo">
            <ChampInfo />
          </Route>
          <Route path="/">
            <ChampionShow />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
