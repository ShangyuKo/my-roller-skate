import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Purchase from "./Purchase";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Confirm from "./Confirm";
import NavBar from "./NavBar";
// npx json-server --watch data/db.json --port 8000
function App(){

  useEffect(() => {
    document.title = "MyRollerSkate"
  }, []);

  return(
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Purchase order/>
            </Route>
            <Route path="/payment">
              <Payment/>
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
