const axios = require('axios')


const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // We need to wrap the loop into an async function for this to work
  for (var i = 0; i < 10000000; i++) {
    console.log("do batch depost");
    axios.get("http://localhost:7000/bt_depost_order").then((res)=>{
        console.log('bt_depost_order time = ', i)
    });
    await timer(30000000); // then the created Promise can be awaited
  }
}

load();

