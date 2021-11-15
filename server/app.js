const utils = require("./utils");

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

// set access port
app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});

// default display
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// DROP table if exists, then CREATE
const qrop_item = "DROP TABLE IF EXISTS Item";
const creat_item = "CREATE TABLE Item ( \
                      Id int NOT NULL AUTO_INCREMENT, \
                      Item varchar(255), \
                      Price DOUBLE, \
                      quantity int, \
                      PicLink varchar(255), \
                      PRIMARY KEY (Id) );";
const qrop_order = "DROP TABLE IF EXISTS Item_order";
const creat_order = "CREATE TABLE Item_order ( \
                      Id int NOT NULL AUTO_INCREMENT, \
                      customerId varchar(255), \
                      Item varchar(255), \
                      Price DOUBLE, \
                      quantity int, \
                      PRIMARY KEY (Id) )";
const qrop_card = "DROP TABLE IF EXISTS Card";
const creat_card = "CREATE TABLE Card ( \
                      Id int NOT NULL AUTO_INCREMENT, \
                      customerId varchar(255), \
                      card_number varchar(255), \
                      expiration_date varchar(255), \
                      cvvCode varchar(255), \
                      holder_name varchar(255), \
                      PRIMARY KEY (Id) )";
const qrop_address = "DROP TABLE IF EXISTS Address";
const creat_address = "CREATE TABLE Address ( \
                        Id int NOT NULL AUTO_INCREMENT, \
                        customerId varchar(255), \
                        name varchar(255), \
                        addressLine1 varchar(255), \
                        addressLine2 varchar(255), \
                        city varchar(255), \
                        state varchar(255), \
                        zip varchar(255), \
                        PRIMARY KEY (Id) )";
const qrop_contactUsMessage = "DROP TABLE IF EXISTS ContactUs_Message";
const creat_contactUsMessage = "CREATE TABLE ContactUs_Message ( \
                                  Id int NOT NULL AUTO_INCREMENT, \
                                  content varchar(255), \
                                  PRIMARY KEY (Id) )";
const create_account = "CREATE TABLE account ( \
                          Id int NOT NULL AUTO_INCREMENT, \
                          firstName varchar(20), \
                          lastName varchar(10), \
                          email varchar(255), \
                          password varchar(255), \
                          PRIMARY KEY (Id), \
                          UNIQUE (email))"; //PRIMARY KEY (email)
const drop_account = "DROP TABLE IF EXISTS account";


const set_up = [qrop_item, creat_item, qrop_order, creat_order, qrop_card, creat_card, qrop_address, creat_address, qrop_contactUsMessage, creat_contactUsMessage, drop_account, create_account];

set_up.forEach(element => db.query(element));

// INSERT default data
const item_add1 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Roller Skate', 399.95, 10, 'https://media.dollskill.com/media/1qVrP7p2r7z7HDduWyE9QzFM179S12Lk-34.jpg')"
const item_add2 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Roller Skate', 399.95, 10, 'https://images.urbndata.com/is/image/UrbanOutfitters/55143531_067_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720')"
const item_add3 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('3-Wheelsm', 30.00, 2, 'https://i5.walmartimages.com/asr/ebd6d548-ad6c-4d2c-acdd-e5c824908579.14390c0a369aa722af7f4c8c31edda6b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF')"
const item_add4 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Colorful Blades', 20.00, 8, 'https://cdn.shopify.com/s/files/1/0066/8945/6243/products/Impala_skate_inline_skates_blades_rollerblades_blue_180x.jpg?v=1584306107')"
const item_add5 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Pads', 74.95, 10, 'https://www.rei.com/media/8be42fa2-c3a3-4517-85c1-e13dea1213f5?size=784x588')"
const item_add6 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Pads', 74.95, 10, 'https://cdn10.bigcommerce.com/s-bac1n25m/product_images/attribute_rule_images/423295_std_1627047275.jpg')"
const item_add7 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Pads', 74.95, 10, 'https://cdn.shopify.com/s/files/1/2423/6599/products/SpringMint_2021_4copy_900x.jpg?v=1617230926')"
const item_add8 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Pads', 74.95, 10, 'https://cdn.shopify.com/s/files/1/0335/2762/7821/products/Wipeout-Pads_1-PinkTeal-Hero_1024x1024.jpg?v=1594050870')"

const item_add9 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Wheels', 32.00, 10, 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Impala-58mm-82a-Pastel-Lilac-Roller-Skate-Wheels-_341741-front-US.jpg')"
const item_add10 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Wheels', 32.00, 10, 'https://i5.walmartimages.com/asr/deff5b90-7bc5-4166-8442-4ea64b5b3d2e.e584b7219861e595cef582a3bc2d7bfc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF')"
const item_add11 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Wheels', 32.00, 10, 'https://cdn10.bigcommerce.com/s-bac1n25m/products/19478/images/64803/WHEELS-STOPPERS_1200x1200__0000s_0029_INLINEWHEELPACK_SKYBLUE_2_1200x__03102.1627323392.462.464.jpg?c=2')"
const item_add12 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Wheels', 32.00, 10, 'https://m.media-amazon.com/images/I/81Fdo24b77L._AC_SX679_.jpg')"

const item_add13 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Helmet', 69.95, 10, 'https://cdn.shopify.com/s/files/1/0836/6919/products/green_bike_helmet_001_600x.jpg?v=1611711971')"
const item_add14 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Helmet', 19.95, 10, 'https://cdn.shopify.com/s/files/1/2423/6599/products/4272_1_Maincopy_900x.jpg?v=1632848198')"
const item_add15 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Helmet', 19.95, 10, 'https://cdn.shopify.com/s/files/1/0279/0277/1337/products/The-Heed-Black-Rubber_6f2a418f-5574-4c54-89e6-25985c770bc9_1024x1024.jpg?v=1589401252')"
const item_add16 = "INSERT INTO Item (Item, Price, quantity, PicLink) VALUES ('Helmet', 19.95, 10, 'https://cdn.shopify.com/s/files/1/0330/6389/5085/products/1_2_dd218ee8-0201-4199-a2c8-7d63002fdc9b-sw_1200x.jpg?v=1624441370')"


const set_up2 = [item_add1, item_add2, item_add3, item_add4,item_add5 , item_add6, item_add7, item_add8, item_add9, item_add10, item_add11, item_add12, item_add13, item_add14, item_add15, item_add16];

set_up2.forEach(element =>
    db.query(element));


// set access API
app.get("/item_query", function(req, res) {
    const result = db.query('select * from Item');
    console.log('data: ', result);
    return res.send(result)
});

var order_wait_name = [];
var order_wait_quantity = [];

app.post("/depost_order", function(req, res) {
  var names = req.body.names;
  var quantity = req.body.quantity;
  var user_uid = req.body.user_uid;

  order_wait_name.push(names);
  order_wait_quantity.push(quantity);

  const uid_exist_flag = utils.check_uid(user_uid);
  if (uid_exist_flag == false){
    utils.set_up_user_order_table(user_uid);
  }
  exist_user_order = utils.check_user_order(user_uid);

  names.forEach((id_, index) => {
    const quan = quantity[index];
    var update_oder = quan + exist_user_order[id_];
    const result1 = db.query(`UPDATE Item_order SET quantity = ${update_oder} WHERE Id = ${id_} AND customerId = '${user_uid}';`);
    // console.log('depost_order 1: ', result1);
  });

  console.log('order_wait_name ', order_wait_name);
  console.log('order_wait_quantity: ', order_wait_quantity);
  return res.send('')

});

app.get("/bt_depost_order", function(req, res) {

  order_wait_name.forEach((names, index) => {
    const quantity = order_wait_quantity[index];

    const [n_id_quantiy] = utils.check_quantity_nocare(names, quantity);

    for (const [Id, value] of Object.entries(n_id_quantiy)) {
        const result2 = db.query(`UPDATE Item SET quantity = ${value} WHERE Id = ${Id};`);
        console.log('depost_order 2: ', result2);
    }
  
  });

  order_wait_name = [];
  order_wait_quantity = [];
  console.log('order_wait_name ', order_wait_name);
  console.log('order_wait_quantity: ', order_wait_quantity);

  return res.send('suscess')
});


app.get("/order_query", function(req, res) {
    var user_uid = req.query.user_uid;
    const result = db.query(`select * from Item_order  WHERE customerId = '${user_uid}';`)
    // console.log('order_query: ', result);
    return res.send(result)
});

app.post("/depost_card", function(req, res) {
    var card_number = req.body.card_number;
    var expiration_date = req.body.expiration_date;
    var cvvCode = req.body.cvvCode;
    var holder_name = req.body.holder_name;
    var user_uid = req.body.user_uid;
    const result = db.query(
      `INSERT INTO Card (customerId, card_number, expiration_date, cvvCode, holder_name) VALUES ('${user_uid}', '${card_number}', '${expiration_date}', '${cvvCode}', '${holder_name}');`);
    console.log('depost_card: ', result);
    return res.send(result)
    });

app.get("/card_query", function(req, res) {
    var user_uid = req.query.user_uid;
    const result = db.query(`select * from Card  WHERE customerId = '${user_uid}';`)
    console.log('card_query: ', result);
    return res.send(result)
});

app.post("/depost_address", function(req, res) {
    var name = req.body.name;
    var address_1 = req.body.address_1;
    var address_2 = req.body.address_2;
    var city = req.body.city;
    var state = req.body.state;
    var zip = req.body.zip;
    var user_uid = req.body.user_uid;
    const result = db.query(
      `INSERT INTO Address (customerId, name, addressLine1, addressLine2, city, state, zip) VALUES ('${user_uid}', '${name}', '${address_1}', '${address_2}', '${city}', '${state}', '${zip}');`);
    console.log('depost_address: ', result);
    return res.send(result)
});

app.get("/address_query", function(req, res) {
    var user_uid = req.query.user_uid;
    const result = db.query(`select * from Address  WHERE customerId = '${user_uid}';`)
    console.log('address_query: ', result);
    return res.send(result)
});

app.post("/depost_contactUsMessage", function(req, res) {
  var content = req.body.content;
  const result = db.query(
    `INSERT INTO ContactUs_Message (content) VALUES ('${content}');`);
  // console.log('depost_contactUsMessage: ', result);
  const returnId = db.query('select LAST_INSERT_ID()')
  console.log('returnId: ', returnId);
  return res.send(returnId)
});

app.get("/contactUsMessage_query", function(req, res) {
  const Id = req.body.Id;
  const result = db.query(`select * from ContactUs_Message where Id = ${Id}`)
  console.log('contactUsMessage_query: ', result);
  return res.send(result)
});

app.post("/signup", function(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var password = req.body.password; 
  db.query(
    ` INSERT INTO account (firstName, lastName, email, password) 
        VALUES ('${firstName}', '${lastName}', '${email}', '${password}');`);
  const emailExist = db.query(
      `SELECT email
    FROM account
    WHERE email = '${email}'AND password = '${password}';`);
  if(emailExist.length != 0) {
    return res.send("Login Success!");
  }
  //console.log("is it printed? ",firstName);
     
    //   INSERT INTO account (firstname, lastname, email, password) 
    // SELECT '${firstName}', '${lastName}', '${email}', '${password}'
    // WHERE NOT EXISTS 
    //     (SELECT email
    //      FROM account 
    //      WHERE email = '${email}')
});

app.post("/signin", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  const signInId = db.query(`SELECT Id FROM account WHERE email = '${email}' AND password = '${password}';`);

  // db.query(
  //   `SELECT * FROM account WHERE username='${username}'`,
  //   function(err, rows, fields) {
  //     // 檢查帳號是否存在
  //     if (rows.length === 0) {
  //       return res.status(500).send('Login Failed!');
  //     };
  //     // 若帳號存在就進行密碼比較
  //     const psRes = bcrypt.compareSync(req.body.password, rows[0].password);
  //     if (!psRes) {
  //       res.status(500).send("Password Wrong!");
  //     }
  //     return res.send("Login Success!");
  //   }
  // );

  console.log("body", signInId.length);
  console.log('signInId: ', signInId);
  //if(emailExist.length == 1)alert('logged in');
  if(signInId.length == 0) {
    console.log('Password is wrong or email is not registered');
  }
  else{
    res.send(signInId);
  }

  });
