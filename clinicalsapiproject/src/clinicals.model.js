import mongoose from 'mongoose';

var clinicalsSchema = new mongoose.Schema({
    componentName:String,
    componentValue:String,
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }
})

module.exports=clinicalsSchema;