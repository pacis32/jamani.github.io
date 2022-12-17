let { response } = require('express');
var express = require('express');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "userDB"
});


var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/myFile', function (req, res) {
    res.sendFile( __dirname + "/public/" + "inventory.html" );
 })

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name,
      user_id:req.query.user_id,
      password:req.query.password,
      start_date:req.query.start_date,
      role:req.query.role
   };

con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   var sql = 'INSERT INTO user1 (first_name, last_name,user_id,password,start_date,role) VALUES (?, ?, ?,?,?,?)';
   var values=[ response.first_name, response.last_name,response.user_id,response.password,response.start_date,response.role]
   con.query(sql, values,function (err, result) {
     if (err) throw err;
     console.log("Table created");
   });
 });
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(105, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});

