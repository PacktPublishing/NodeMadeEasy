import mongoose from 'mongoose';
import productsSchema from './product.model';

productsSchema.statics = {
    get: function(query, cb) {
     this.find(query, cb);
    },
    create : function(data, cb) {
      var product = new this(data);
      product.save(cb);
    },     
    update: function(query, updateData, cb) { 
      this.findOneAndUpdate(query, 
           {$set: updateData}, cb);
    },
    delete: function(query, cb) {    
      this.findOneAndDelete(query,cb);
    }
}

var productModel = mongoose.model("Product",productsSchema);
module.exports = productModel;
