
const express = require("express");
const db = require('./db');
const app = express();
const port = 7000;

const cors = require('cors');

function check_products_quantity_in_stock(request_product_idxs, request_product_quantities){
  const result_json =  JSON.parse(JSON.stringify(db.query('select Id, Quantity from Item')));

  // build a map for products in stock
  //    key:    Product idx('Id')
  //    value:  on stock quantity('Quantity')
  const products_quantity_in_stock = new Map();
  for(let i = 0; i < result_json.length; i++){
    products_quantity_in_stock[parseInt(result_json[i]['Id'])] = result_json[i]['Quantity'];
  }

  // console.log(products_quantity_in_stock);
  let request_status = true;
  let log = '';
  for(let i = 0; i < request_product_idxs.length; i++){
    const request_product_idx = request_product_idxs[i];
    const request_product_quantity = request_product_quantities[i];

    if(request_product_idx in products_quantity_in_stock){
      
      
      if(products_quantity_in_stock[request_product_idx] < request_product_quantity){
        request_status = false;
        log += 'product ' + request_product_idx + ' is requested ' + request_product_quantity + ' but only ' + products_quantity_in_stock[request_product_idx] + ' on stock.\n';
      }

    }
  }
  console.log(log);
  return [request_status, log];
}

function get_next_orderId(){
  // get new orderId by select the max(orderId) and increment 1.
  const result_json =  JSON.parse(JSON.stringify(db.query("select MAX(orderId) AS 'Maximum Value' from Item_order")));

  let next_orderId = 0;
  if(result_json[0]['Maximum Value'] != null){
    next_orderId = result_json[0]['Maximum Value'] + 1;
  }
  return next_orderId;
}

function insert_orders(request_product_idxs, request_product_quantities, user_uid, orderId){
  for(let i = 0; i < request_product_idxs.length; i++){
    const request_product_idx = request_product_idxs[i];
    let result_json = JSON.parse(JSON.stringify(db.query(`select Item, Price from Item where Id = '${request_product_idx}';`)));
    const product_name = result_json[0]['Item'];
    const product_price = result_json[0]['Price'];
    const product_quantity = request_product_quantities[i];
    
    result_json = JSON.parse(JSON.stringify(db.query(`select Item from Item_order where OrderId = ${orderId} and ItemId = ${request_product_idx};`)));
    // console.log(result_json);
    db.query(`INSERT INTO Item_order (UserId, OrderId, ItemId, Item, Price, Quantity, Processed) VALUES (${user_uid}, ${orderId}, ${request_product_idx}, '${product_name}', ${product_price}, ${product_quantity}, 0);`);
  }
}

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
    const order_add1 = `INSERT INTO Item_order (Item, UserId, Price, quantity) VALUES ('Roller Skate', '${user_uid}', 399.95, 0);`
    const order_add2 = `INSERT INTO Item_order (Item, UserId, Price, quantity) VALUES ('Helmet', '${user_uid}', 69.95, 0);`
    const order_add3 = `INSERT INTO Item_order (Item, UserId, Price, quantity) VALUES ('Pads', '${user_uid}', 74.95, 0);`
    const order_add4 = `INSERT INTO Item_order (Item, UserId, Price, quantity) VALUES ('Wheels', '${user_uid}', 32.00, 0);`
    const order_add5 = `INSERT INTO Item_order (Item, UserId, Price, quantity) VALUES ('Hat', '${user_uid}', 20.00, 0);`
  
    const set_up3 = [order_add1, order_add2, order_add3, order_add4, order_add5];
  
    set_up3.forEach(element =>
        db.query(element));
  }
  
function check_uid(user_uid) {
    console.log(user_uid);
    console.log(`select * from Item_order WHERE UserId = '${user_uid}'';`);

    const result_json =  JSON.parse(JSON.stringify(db.query(`select * from Item_order WHERE UserId = '${user_uid}';`)));

    console.log('result_json : ', result_json);

    console.log('result_json.length : ', result_json.length);
    var flag = true;


    if (result_json.length == 0){
      flag = false;
    }
    return flag;

  }
  
function check_user_order(user_uid) {
  
    const result_json =  JSON.parse(JSON.stringify(db.query(`select * from Item_order WHERE UserId = '${user_uid}';`)));
  
    const exist_user_order = new Map();
  
    for (var i = 0; i < result_json.length; i++) {
      var json_e = result_json[i];
      exist_user_order[json_e["Id"]] = json_e["quantity"];
    }
  
    return exist_user_order
  }


module.exports = {insert_orders, get_next_orderId, check_products_quantity_in_stock, check_quantity, set_up_user_order_table, check_uid, check_user_order, check_quantity_nocare};


