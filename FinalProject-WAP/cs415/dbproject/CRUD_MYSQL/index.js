 const express= require('express');
 const connection = require('./connection');
const userRoute= require('./routes/user')
 
 const app= express();

 app.use(express.urlencoded({extended:true}) );
 app.use(express.json())
 app.use('/user',userRoute);

 module.exports= app;
