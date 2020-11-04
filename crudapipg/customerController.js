var express = require('express');
var router = express.Router();

var customers = [{
    "id": 1,
    "name": "Bharath",
    "email": "bharath@bharath.com"
},
{
    "id": 2,
    "name": "bob",
    "email": "bob@bob.com"
}
];

var customer = {
    "id": 1,
    "name": "Bharath",
    "email": "bharath@bharath.com"
}

router.get("/",(req,res)=>{
    res.send("<b>Customer API!!</b>");
})

router.get("/customers",(req,res)=>{
         res.send(customers);
})

router.get("/customers/1",(req,res)=>{
            res.send(customer);
})

router.post("/customers",(req,res)=>{
        res.send(customer);
})

router.put("/customers",(req,res)=>{
        res.send(customer);
})

module.exports = router;
