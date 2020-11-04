var express = require('express');
var app = express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var productRouter = require('./productController');
app.use('/productapi',productRouter);

var customerRouter = require('./customerController');
app.use('/customerapi',customerRouter);

app.listen(8000,(err)=>{
    if(err)throw err;
    console.log("Application started on port 8000");
})