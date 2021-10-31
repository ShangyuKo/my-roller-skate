// const mysql = require("mysql");

// // connect MySQL
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "demo",
// });


var MySql = require("sync-mysql");
 
var connection = new MySql({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo"
});
 
module.exports = connection;