
const express = require("express");
const db = require('./db');
const app = express();
const port = 7000;

const cors = require('cors');

function check_quantity(names, quantity) {

    const order_id_quantiy = new Map();
    
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var num = quantity[i];
      order_id_quantiy[name] = num;
    }
  
    const result_json =  JSON.parse(JSON.stringify(db.query('select * from Item')));
  
    var flag = true;
    var response = '';
    var item_num = 0;
    const n_id_quantiy = new Map();
  
    for (var i = 0; i < result_json.length; i++) {
      var json_e = result_json[i];
      var id_key = json_e["Id"];
  
      if (id_key in order_id_quantiy) {
        item_num += 1;
        if (order_id_quantiy[id_key] > json_e["quantity"]){
          flag = false
          response += json_e["Item"] + ' only has = ' + json_e["quantity"].toString() + " in stock" + '\n'
        }
        else{
          n_id_quantiy[json_e["Id"]] = json_e["quantity"] - order_id_quantiy[id_key];
        }
      }
    }
  
    if (item_num != names.length){
      flag = false
      response += "order item not in taable" + '\n'
    }

    console.log('order_id_quantiy : ', order_id_quantiy);
  
    return [flag, order_id_quantiy, n_id_quantiy, response];
  }


  function check_quantity_nocare(names, quantity) {

    const order_id_quantiy = new Map();
    
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var num = quantity[i];
      order_id_quantiy[name] = num;
    }
  
    const result_json =  JSON.parse(JSON.stringify(db.query('select * from Item')));
  
    var item_num = 0;
    const n_id_quantiy = new Map();
  
    for (var i = 0; i < result_json.length; i++) {
      var json_e = result_json[i];
      var id_key = json_e["Id"];
  
      if (id_key in order_id_quantiy) {
        item_num += 1;
        n_id_quantiy[json_e["Id"]] = json_e["quantity"] - order_id_quantiy[id_key];
      }
    }

    console.log('order_id_quantiy : ', order_id_quantiy);
  
    return [n_id_quantiy];
  }
  
function set_up_user_order_table(user_uid) {
    const order_add1 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Roller Skate1', '${user_uid}', 399.95, 0);`
    const order_add2 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Roller Skate2', '${user_uid}', 399.95, 0);`
    const order_add3 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Roller Skate3', '${user_uid}', 299.95, 0);`
    const order_add4 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Roller Skate4', '${user_uid}', 299.95, 0);`

    const order_add5 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Helmet1', '${user_uid}', 69.95, 0);`
    const order_add6 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Helmet2', '${user_uid}', 19.95, 0);`
    const order_add7 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Helmet3', '${user_uid}', 19.95, 0);`
    const order_add8 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Helmet4', '${user_uid}', 19.95, 0);`

    const order_add9 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Pads1', '${user_uid}', 74.95, 0);`
    const order_add10 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Pads2', '${user_uid}', 74.95, 0);`
    const order_add11 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Pads3', '${user_uid}', 74.95, 0);`
    const order_add12 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Pads4', '${user_uid}', 74.95, 0);`

    const order_add13 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Wheels1', '${user_uid}', 32.00, 0);`
    const order_add14 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Wheels2', '${user_uid}', 32.00, 0);`
    const order_add15 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Wheels3', '${user_uid}', 32.00, 0);`
    const order_add16 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Wheels4', '${user_uid}', 32.00, 0);`

    //const order_add5 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Hat', '${user_uid}', 20.00, 0);`
  
    const set_up3 = [order_add1, order_add2, order_add3, order_add4, order_add5, order_add6, order_add7, order_add8, order_add9, order_add10, order_add11, order_add12, order_add13, order_add14, order_add15, order_add16];
  
    set_up3.forEach(element =>
        db.query(element));
  }
  
function check_uid(user_uid) {
    console.log(user_uid);
    console.log(`select * from Item_order WHERE customerId = '${user_uid}'';`);

    const result_json =  JSON.parse(JSON.stringify(db.query(`select * from Item_order WHERE customerId = '${user_uid}';`)));

    console.log('result_json : ', result_json);

    console.log('result_json.length : ', result_json.length);
    var flag = true;


    if (result_json.length == 0){
      flag = false;
    }
    return flag;

  }
  
function check_user_order(user_uid) {
  
    const result_json =  JSON.parse(JSON.stringify(db.query(`select * from Item_order WHERE customerId = '${user_uid}';`)));
  
    const exist_user_order = new Map();
  
    for (var i = 0; i < result_json.length; i++) {
      var json_e = result_json[i];
      exist_user_order[json_e["Id"]] = json_e["quantity"];
    }
  
    return exist_user_order
  }
  

  
// app.post("/depost_order_pre", function(req, res) {
//   var names = req.body.names;
//   var quantity = req.body.quantity;
//   var user_uid = req.body.user_uid;

//   const [flag, order_id_quantiy, n_id_quantiy, response] = utils.check_quantity(names, quantity);
//   const uid_exist_flag = utils.check_uid(user_uid);

//   if (flag == true) {

//     if (uid_exist_flag == false){
//       utils.set_up_user_order_table(user_uid);
//     }

//     exist_user_order = utils.check_user_order(user_uid);

//     for (const [Id, value] of Object.entries(n_id_quantiy)) {

//         var update_oder = order_id_quantiy[Id] + exist_user_order[Id];
//         const result1 = db.query(`UPDATE Item_order SET quantity = ${update_oder} WHERE Id = ${Id} AND customerId = '${user_uid}';`);
//         console.log('depost_order 1: ', result1);
        
//         const result2 = db.query(`UPDATE Item SET quantity = ${value} WHERE Id = ${Id};`);
//         console.log('depost_order 2: ', result2);
//     }
//   }
  
//   return res.send(response)

// });


module.exports = { check_quantity, set_up_user_order_table, check_uid, check_user_order, check_quantity_nocare};


