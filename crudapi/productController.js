var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient
const dbUrl = "mongodb://localhost:27017";
var db;
const collection_name="product";

MongoClient.connect(dbUrl,(err,con)=>{
    if(err)console.log(err);
    db = con.db('products');
})

router.get("/",(req,res)=>{
    res.send("<b>Product API!!</b>");
})

router.get("/products",(req,res)=>{
    db.collection(collection_name).find().toArray((err,products)=>{
        if(err)console.log(err);
        res.send(products);
    })
    
})

router.get("/products/:id",(req,res)=>{
        db.collection(collection_name).findOne({_id:mongo.ObjectId(req.params.id)},(err,product)=>{
            if(err)console.log(err);
            res.send(product);
        })
      
})

router.post("/products",(req,res)=>{
    db.collection(collection_name).insert(req.body,(err,result)=>{
        if(err)console.log(err);
        res.send(result);
    })
})

router.put("/products/:id",(req,res)=>{
    db.collection(collection_name).update({_id:mongo.ObjectId(req.params.id)},{
        $set:{
            name:req.body.name,
            price:req.body.price
        }
    },(err,result)=>{
        console.log(err);
        res.send(result);
    })
    
})

router.delete("/products/:id",(req,res)=>{
    db.collection(collection_name).remove({_id:mongo.ObjectId(req.params.id)},(err,response)=>{
        if(err)console.log(err);
        res.send(response);
    })
  
})

module.exports = router;
