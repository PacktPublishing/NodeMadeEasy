var express = require('express');
var router = express.Router();
const Pool = require('pg').Pool
const pool = new Pool({
    host:'localhost',
    port: '5432',
    database: 'employeedb',
    user: 'test',
    password: 'password'
})


router.get("/",(req,res)=>{
    res.send("<b>Employee API!!</b>");
})

router.get("/employees",(req,res)=>{
pool.query('select * from employee',(err,results)=>{
    if(err) console.log(err);
    res.send(results.rows);
})
})

router.get("/employees/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    pool.query('select * from employee where id=$1',[id],(err,results)=>{
        if(err) console.log(err);
        res.send(results.rows[0]);
    })
      
})

router.post("/employees",(req,res)=>{
    const {name,sal} = req.body;
    pool.query('insert into employee (name,sal) values($1,$2) RETURNING *',[name,sal],(err,results)=>{
        if(err) console.log(err);
        res.send(results.rows[0]);
    })
})

router.put("/employees/:id",(req,res)=>{
    const {sal} = req.body;
    var id = parseInt(req.params.id);
    pool.query('update employee set sal=$1 where id=$2',[sal,id],(err,results)=>{
        if(err) console.log(err);
        res.send('Employee Updated');
    })
    
})

router.delete("/products/:id",(req,res)=>{
    db.collection(collection_name).remove({_id:mongo.ObjectId(req.params.id)},(err,response)=>{
        if(err)console.log(err);
        res.send(response);
    })
  
})

module.exports = router;
