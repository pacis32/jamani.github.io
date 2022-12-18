const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017/proddb'
const mongo = new MongoClient(url)

let db;

exports.connectDB = async () => {

    const client = await mongo.connect()

    console.log('DB connected');

    db = client.db('proddb')

}

exports.getlogs = (userid) => {
    try {
        const response = db.collection('logs').find({}).toArray()
        
        return response

    } catch (error) {
        console.log("error getting logs")
    }
}
exports.getproducts = (userid) => {
    try {
        const log = {userid, dateTime:Date.now() ,comment:"get all products"}
        const response = db.collection('products').find({}).toArray();
        db.collection('logs').insertOne(log);
        return response

    } catch (error) {
        console.log("error getting products")
    }
}

exports.addprod = (product, userid) => {
    try {
        const log = {userid, dateTime:Date.now() ,comment:"add new product"}
        const response = db.collection('products').insertOne(product)
        db.collection('logs').insertOne(log);
        return response

    } catch (error) {
        console.log("error when saving product")
    }
}


exports.updateprod = (product, prodid, userid) => {
    try {
        const log = {userid, dateTime:Date.now() ,comment:"update product"}
        const {name, category,quantity, price, discount} = product
        const response = db.collection('products').updateOne({_id:prodid}, {$set:{name, category,quantity, price, discount}});
        db.collection('logs').insertOne(log);
        return response

    } catch (error) {
        console.log("error when saving product")
    }
}
exports.deleteprod = (prodid, userid) => {
    try {
        const log = {userid, dateTime:Date.now() ,comment:"delete product"}
        const response = db.collection('products').deleteOne({_id:prodid});
        db.collection('logs').insertOne(log);
        return response

    } catch (error) {
        console.log("error when saving product")
    }
}
