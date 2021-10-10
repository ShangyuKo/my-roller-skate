import React, {useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Purchase from "./components/Purchase";
import Payment from "./components/Payment";
import Shipping from "./components/Shipping";
import Confirm from "./components/Confirm";
import About from "./components/about_us";
import NavBar from "./components/NavBar";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home"
import Footer from "./components/Footer";
import Products from "./components/Products";
import VideoSection from './components/videoSection';
import Login from "./components/signup_page/log_in";
// npx json-server --watch data/db.json --port 8000

function App(){

  const user_uid = "853ef64c6554342783"

  useEffect(() => {
    document.title = "MyRollerSkate";
  }, []);


  return(
    <Router>
      <div className="App">
        <Router>
          <NavBar />
        </Router>
        <div className="content">
          <Switch>
            <Route exact path="/my-roller-skate" >
              <VideoSection/>
            </Route>
            <Route exact path='/purchase'>
              <Purchase user_uid={user_uid}/>
            </Route>
            <Route exact path="/payment">
              <Payment user_uid={user_uid}/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/shipping">
              <Shipping user_uid={user_uid}/>
            </Route>
            <Route exact path="/confirm">
              <Confirm user_uid={user_uid}/>
            </Route>
            <Route exact path="/contactUs">
              <ContactUs/>
            </Route>

          </Switch>
        </div>
        <Router>
          <Footer/>
        </Router>
      </div>  
    </Router>
  );
}

export default App;
