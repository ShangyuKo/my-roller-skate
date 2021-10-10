
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
        tem_num += 1;
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
  
function set_up_user_order_table(user_uid) {
    const order_add1 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Roller Skate', '${user_uid}', 399.95, 0);`
    const order_add2 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Helmet', '${user_uid}', 69.95, 0);`
    const order_add3 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Pads', '${user_uid}', 74.95, 0);`
    const order_add4 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Wheels', '${user_uid}', 32.00, 0);`
    const order_add5 = `INSERT INTO Item_order (Item, customerId, Price, quantity) VALUES ('Hat', '${user_uid}', 20.00, 0);`
  
    const set_up3 = [order_add1, order_add2, order_add3, order_add4, order_add5];
  
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
  

module.exports = { check_quantity, set_up_user_order_table, check_uid, check_user_order};