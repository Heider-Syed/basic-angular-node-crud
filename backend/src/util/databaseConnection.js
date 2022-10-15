const mysql = require("mysql");

exports.dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mysql_mean_crud"
});