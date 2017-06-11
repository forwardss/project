let mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123123",
	insecureAuth:true,
	port:"3306",
	database:"1503a"
})
connection.connect();
module.exports = connection;
