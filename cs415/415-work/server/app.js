const express = require("express");
const cors = require("cors");
const db = require("./db");
const { ObjectId } = require("mongodb");
const app = express();
app.use(express.json());
app.use(cors());
db.connectDB();

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





app.listen(3000, () => console.log("listening on port 3000"));




