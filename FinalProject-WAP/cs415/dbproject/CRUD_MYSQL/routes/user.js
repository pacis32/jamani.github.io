const express=require('express');
const connection= require('../connection');
const router = express.Router();


router.get('/register',(req,res)=>{
res.sendFile(__dirname + "/register.html")
})


// router.post('/register',(req,res,next)=>{
//     let user=req.body;
//    console.log(user);
//     var sql= `INSERT INTO users (first_name, last_name,password,start_date,role) VALUES (?,?,?,?,?)`;
//     let values=[ user.first_name, user.last_name,user.password,user.start_date,user.role];
//     connection.query(sql,values,(err,results)=>{
//         if(!err){
//             return res.status(200).json({message:'User Added successfully'});

//         }
//         console.log(err);
//         return res.status(500).json({ message:'failed to add'});
//     });
// });

router.post('/register',(req,res)=>{
  response = {

    first_name: req.query.first_name,

    last_name: req.query.last_name,


    password: req.query.password,

    startDate: req.query.startDate,

    role: req.query.role,

  };
  var sql =

    "INSERT INTO users (password,first_name, last_name,start_date,role) VALUES (?, ?,?,?,?)";

  var values = [

    req.body.first_name,
    req.body.last_name,
    req.body.password,
    req.body.start_date,
    req.body.role

  ];

  connection.query(sql, values, function (err, result) {
 
    if (err) throw err;
    console.log(err)

    console.log("record created");

    res.send("User created!");

  });
})




// Order by
router.get('/read',(req,res,next)=>{

    var query= "SELECT * FROM users WHERE role = 'user'";
    connection.query(query,(err,results)=>{
      if(!err){
       
        return res.status(200).json(results);
      }
      else{
        console.error(err)
        return res.status(500).json({message:'does not read data'});
      }
    });
  });

//Match using where

router.get('/',(req,res,next)=>{

    var query= "SELECT * FROM users ORDER BY last_name";
    connection.query(query,(err,results)=>{
      if(!err){
       
        return res.status(200).json(results);
      }
      else{
        console.error(err)
        return res.status(500).json({message:'does not read data'});
      }
    });
  });





  router.patch('/update/:id',(req,res,next)=>{
    const id =req.params.id;
    let user= req.body;
    var query=" update users set first_name=?,last_name=?, password=?,start_date=? ,role =? where user_id=?";
    connection.query(query,[ user.first_name, user.last_name,user.password,user.start_date,user.role,id],(err,results)=>{
        if(!err){
            if(results.affectedRows==0){
                return res.status(400).json({message:'user id doesnot found'})
            }
            console.log(results);
                return res.status(200).json({message:'User updated successfully'})
                // console.log(results);
        }
        else{
           
            return res.status(500).json(err);
        }
        
    });

  });

  router.delete('/delete/:id',(req,res,next)=>{
    const id =req.params.id;
    var query= 'delete from users where user_id=?';
    connection.query(query,[id],(err, results)=>{
        if(!err){
            if(results.affectedRows ==0){
                return res.status(400).json({message:'user id not found'})
            }
            return res.status(200).json({message:'User deleted successfully'})

        }
        else{
            // console.log(err)
            return res.status(500).json(err);
        }
    })
   

  })

module.exports=router;

