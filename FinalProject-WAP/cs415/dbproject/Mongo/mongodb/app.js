const express = require("express");
const cors = require("cors");
const db = require("./db");
const { ObjectId } = require("mongodb");
const app = express();
app.use(express.json());
app.use(cors());
db.connectDB();


app.post("/login", async (req, res) => {
    const check = req.body;
    const result = await db.getuser(check);
    if(result){

        res.json({success:true, data: {role: result.role, username:result.username, userid:result._id}});
    }else{
        res.json({success:false, error:"wrong crendentials"});
    }
    
});

app.post("/user", async (req, res) => {
   const user = req.body
    const result = await db.adduser(user);
    res.json(result);
});


app.get("/prods/:userId", async (req, res) => {
    const userid = req.params.userId;
    const result = await db.getproducts(userid);
    res.json(result);
});

app.get("/logs/:userId", async (req, res) => {
    const userid = req.params.userId;
    const result = await db.getlogs(userid);
    res.json(result);
});
//add products
app.post("/prods/:userId", async (req, res) => {
    const product = req.body;
    const userid = req.params.userId
    const result = await db.addprod(product, userid);
    res.json(result);
});

app.put("/prods/:userId/:prodid", async (req, res) => {
    const product = req.body;
    const userid = req.params.userId
    const prodid = ObjectId(req.params.prodid)  
    const result = await db.updateprod(product, prodid, userid);
    res.json(result);
});


app.delete("/prods/:userId/:prodid", async (req, res) => {
    const userid = req.params.userId
    const prodid = ObjectId(req.params.prodid)
    const result = await db.deleteprod(prodid, userid);
    res.json(result);
});


app.post("/order", async (req, res) => {
   
    const order = req.body
     const result = await db.addOrder(order);
     res.json({success:true, data:result});
 });
 
 
 app.get("/order/:userId", async (req, res) => {
     const userid = ObjectId(req.params.userId);
     const result = await db.getOrders(userid);
     res.json({success:true, data:result});
 });
 


app.listen(3002, () => console.log("listening on port 3002"));




