import mongoose from 'mongoose';

var productSchema = new mongoose.Schema({
    name:String,
    price:Number
});

module.exports = productSchema;