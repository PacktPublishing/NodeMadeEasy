import mongoose from 'mongoose';
import props from './properties';
module.exports=function(){
mongoose.connect(props.DB);
}