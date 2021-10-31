const express = require("express");
const app = express();
const port = 9000;

const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:8000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

// set access port
app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});


app.post('/order_process', async function(req, res) {
    // console.log('req.body: ', req);
    var quantity = req.body.quantity;
    var total_money = req.body.total_money;
    var paymentInfo = req.body.paymentInfo;
    var shippingInfo = req.body.shippingInfo;

    console.log('quantity: ', quantity);
    console.log('total_money: ', total_money);
    console.log('paymentInfo: ', paymentInfo);
    console.log('shippingInfo: ', shippingInfo);

    return res.send('confirms')
});