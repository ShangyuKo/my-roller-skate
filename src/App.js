import React, {useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Purchase from "./components/Purchase";
import Payment from "./components/Payment";
import Shipping from "./components/Shipping";
import Confirm from "./components/Confirm";
import About from "./components/about_us";
import NavBar from "./components/NavBar";
// npx json-server --watch data/db.json --port 8000
function App(){

  useEffect(() => {
    document.title = "MyRollerSkate"
  }, []);

  return(
    <Router>
      <div className="App">
        <Router>
          <NavBar />
        </Router>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Purchase/>
            </Route>
            <Route path="/payment">
              <Payment/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/shipping">
              <Shipping/>
            </Route>
            <Route path="/confirm">
              <Confirm />
            </Route>
          </Switch>
        </div>
      </div>  
    </Router>
  );
}

export default App;
