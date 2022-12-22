const http =require('http')
const app= require('./index');
const port= 3005;
// const server= http.createServer(app);

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })