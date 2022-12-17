var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "userDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE user ( first_name VARCHAR(255),last_name VARCHAR(255),user_id VARCHAR(255),password VARCHAR(255), start_date Date,role VARCHAR(255))";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});