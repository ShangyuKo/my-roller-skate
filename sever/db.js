const mysql = require("mysql");

// connect MySQL
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo",
});

module.exports = connection;