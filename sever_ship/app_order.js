const express = require("express");
const axios = require('axios')
const app = express();
const port = 8000;

const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

// set access port
app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});

app.post("/order_submit", async function(req, res) {

  // console.log('req.body : ', req.body);
  var buyQuantity = req.body.buyQuantity;
  var totalPrice = req.body.totalPrice;
  var paymentInfo = req.body.paymentInfo;
  var shippingInfo = req.body.shippingInfo;

  data_ = {'quantity':buyQuantity,
        'total_money': totalPrice,
        'paymentInfo':paymentInfo,
        'shippingInfo': shippingInfo}

  axios.post("http://localhost:9000/order_process", data_).then((data)=>{
  console.log('data.data ', data.data)
  if (data.data == 'confirms') {
      return res.send('confirms');
    }
    else {
      return res.send('failed');
  }
  });

});

