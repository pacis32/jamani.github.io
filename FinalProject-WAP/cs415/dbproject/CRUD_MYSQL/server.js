const http =require('http')
const app= require('./index');
const port= 3005;
const server= http.createServer(app);
server.listen(port,()=>{
console.log('server listening ')
});