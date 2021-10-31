const express = require('express')
const app = express()
const port = 7001

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
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const simulate_payment_process = async _ => {
    const v = await sleep(5000)
    return 'payment process finish.'
}

app.post('/payment_process', async function(req, res) {
    var card_number = req.body.card_number;
    var expiration_date = req.body.expiration_date;
    var cvvCode = req.body.cvvCode;
    var holder_name = req.body.holder_name;

    const payment_result = await simulate_payment_process()
    console.log('post ' + payment_result)
    
    console.log('card_number: ', card_number);
    console.log('expiration_date: ', expiration_date);
    console.log('cvvCode: ', cvvCode);
    console.log('holder_name: ', holder_name);

    return res.send('post confirms')
});

// app.get('/payment_process', async function(req, res) {
//     const payment_result = await simulate_payment_process()
//     console.log('get '+payment_result)
//     return res.send('get confirms')
// });