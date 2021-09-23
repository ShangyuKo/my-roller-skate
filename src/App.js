import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Purchase from "./Purchase";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Confirm from "./Confirm";
import NavBar from "./NavBar";
// npx json-server --watch data/db.json --port 8000
function App(){
  const [order, setOrder] = useState({
    buyQuantity: [0,0,0,0,0],
    totalPrice: 0,
    paymentInfo: {
      creditCardNumber: '',
      expireDate: '',
      ccvCode: '',
      cardHolderName: ''
    },
    shippingInfo: {
      name: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: ''
    }
  });

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
              <Purchase order={order} setOrder={setOrder}/>
            </Route>
            <Route path="/payment">
              <Payment order={order} setOrder={setOrder}/>
            </Route>
            <Route path="/shipping">
              <Shipping order={order} setOrder={setOrder}/>
            </Route>
            <Route path="/confirm">
              <Confirm order={order} setOrder={setOrder}/>
            </Route>
          </Switch>
        </div>
      </div>  
    </Router>
  );
}

export default App;
