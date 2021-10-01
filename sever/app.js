const express = require("express");
const db = require('./db');
const app = express();
const port = 7000;

const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  
const qrop_item = "DROP TABLE Item";
const creat_item = "CREATE TABLE Item ( Id int NOT NULL AUTO_INCREMENT, Item varchar(255), Price DOUBLE, quantity int, PicLink varchar(255), PRIMARY KEY (Id) );";
const qrop_order = "DROP TABLE Item_order";
const creat_order = "CREATE TABLE Item_order ( Id int NOT NULL AUTO_INCREMENT, \
         Item varchar(255), Price DOUBLE, quantity int, PRIMARY KEY (Id)  )";

const qrop_card = "DROP TABLE Card";
const creat_card = "CREATE TABLE Card ( Id int NOT NULL AUTO_INCREMENT, card_number varchar(255), \
                     expiration_date varchar(255), cvvCode varchar(255), \
                    holder_name varchar(255), PRIMARY KEY (Id) )";
const qrop_address = "DROP TABLE Address";
const creat_address = "CREATE TABLE Address ( Id int NOT NULL AUTO_INCREMENT, name varchar(255), addressLine1 varchar(255), \
                     addressLine2 varchar(255), city varchar(255), \
                     state varchar(255), zip varchar(255), PRIMARY KEY (Id) )";

const set_up = [qrop_item, creat_item, qrop_order, creat_order, qrop_card, creat_card, qrop_address, creat_address];
// const set_up = [qrop_item, creat_item, creat_order, creat_card, creat_address];
// const set_up = [creat_order];

set_up.forEach(element =>
    db.query(element, function(err, rows) {
        if (err) throw err;
        // console.log('Response: ', rows);}
    }));

// const creat_item = "CREATE TABLE Item ( Id int NOT NULL AUTO_INCREMENT, Item varchar(255), Price int, quantity int, PRIMARY KEY (Id) );";


const item_add1 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Roller Skate', 399.95, 0, 'https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg')"
const item_add2 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Helmet', 69.95, 0, 'https://cdn.shopify.com/s/files/1/0836/6919/products/green_bike_helmet_001_600x.jpg?v=1611711971')"
const item_add3 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Pads', 74.95, 0, 'https://www.rei.com/media/8be42fa2-c3a3-4517-85c1-e13dea1213f5?size=784x588')"
const item_add4 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Wheels', 32.00, 0, 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Impala-58mm-82a-Pastel-Lilac-Roller-Skate-Wheels-_341741-front-US.jpg')"
const item_add5 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Hat', 20.00, 0, 'https://cdn.shopify.com/s/files/1/0066/8945/6243/products/Impala_skate_inline_skates_blades_rollerblades_blue_180x.jpg?v=1584306107')"

const set_up2 = [item_add1, item_add2, item_add3, item_add4, item_add5];

set_up2.forEach(element =>
    db.query(element, function(err, rows) {
        if (err) throw err;
        // console.log('Response: ', rows);
    }));

const order_add1 = "INSERT INTO Item_order (Item, Price, quantity) VALUES ('Roller Skate', 399.95, 0);"
const order_add2 = "INSERT INTO Item_order (Item, Price, quantity) VALUES ('Helmet', 69.95, 0);"
const order_add3 = "INSERT INTO Item_order (Item, Price, quantity) VALUES ('Pads', 74.95, 0);"
const order_add4 = "INSERT INTO Item_order (Item, Price, quantity) VALUES ('Wheels', 32.00, 0);"
const order_add5 = "INSERT INTO Item_order (Item, Price, quantity) VALUES ('Hat', 20.00, 0);"

const set_up3 = [order_add1, order_add2, order_add3, order_add4, order_add5];

set_up3.forEach(element =>
    db.query(element, function(err, rows) {
        if (err) throw err;
        // console.log('Response: ', rows);
    }));
        

app.get("/item_query", function(req, res) {
    db.query('select * from Item', function(err, result) {
        if (err) throw err;
        console.log('Response: ', result);
        return res.send(result)
});  });


app.post("/depost_order", function(req, res) {
  var name = req.body.name;
  var quantity = req.body.quantity;
  db.query(
    `UPDATE Item_order SET quantity = ${quantity} WHERE Id = ${name};`,
    function(err, rows, fields) {
        if (err) throw err;
        console.log('Response: ', rows);}
  );
});


app.get("/order_query", function(req, res) {
    db.query('select * from Item_order', function(err, result) {
        if (err) throw err;
        console.log('Response: ', result);
        return res.send(result)
});  });


app.post("/depost_card", function(req, res) {
    var card_number = req.body.card_number;
    var expiration_date = req.body.expiration_date;
    var cvvCode = req.body.cvvCode;
    var holder_name = req.body.holder_name;
    db.query(
      `INSERT INTO Card (card_number, expiration_date, cvvCode, holder_name) VALUES ('${card_number}', '${expiration_date}', '${cvvCode}', '${holder_name}');`,
      function(err, rows, fields) {
          if (err) throw err;
          console.log('Response: ', rows);}
    );
  });


app.get("/card_query", function(req, res) {
    db.query('select * from Card', function(err, result) {
        if (err) throw err;
        console.log('Response: ', result);
        return res.send(result)
});  });


app.post("/depost_address", function(req, res) {
    var name = req.body.name;
    var address_1 = req.body.address_1;
    var address_2 = req.body.address_2;
    var city = req.body.city;
    var state = req.body.state;
    var zip = req.body.zip;
    db.query(
      `INSERT INTO Address (name, addressLine1, addressLine2, city, state, zip) VALUES ('${name}', '${address_1}', '${address_2}', '${city}', '${state}', '${zip}');`,
      function(err, rows, fields) {
          if (err) throw err;
          console.log('Response: ', rows);}
    );
});


app.get("/address_query", function(req, res) {
    db.query('select * from Address', function(err, result) {
        if (err) throw err;
        console.log('Response: ', result);
        return res.send(result)
});  });