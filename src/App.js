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
// import Products from "./components/Products";
import VideoSection from './components/videoSection';
import Signup from "./components/sign_up_in_page/sign_up";
import Products from "./components/Products/products";
// npx json-server --watch data/db.json --port 8000
import Signin from "./components/sign_up_in_page/sign_in";
import useSessionStorage from "./components/useSessionStorage";

function App(){

  const [uid, set_uid] = useSessionStorage('uid', -1);

  useEffect(() => {
    document.title = "MyRollerSkate";
    console.log("uid = " + uid);
  }, []);


  return(
    <Router>
      <div className="App">
        <Router>
          <NavBar uid={uid} set_uid={set_uid}/>
        </Router>
        <div className="content">
          <Switch>
            <Route exact path="/my-roller-skate" >
              <VideoSection/>
            </Route>
            <Route exact path='/purchase'>
              <Purchase user_uid={uid}/>
            </Route>
            <Route exact path="/payment">
              <Payment user_uid={uid}/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/shipping">
              <Shipping user_uid={uid}/>
            </Route>
            <Route exact path="/confirm">
              <Confirm user_uid={uid}/>
            </Route>
            <Route exact path="/contactUs">
              <ContactUs/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/Products">
              <Products/>
            </Route>
            <Route exact path="/signin">
              <Signin uid={uid} set_uid={set_uid}/>
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
