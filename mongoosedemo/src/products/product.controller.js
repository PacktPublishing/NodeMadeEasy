import dao from './product.dao';

exports.getAll=(req,res)=>{
    dao.get({},(err,products)=>{
        if(err) console.log(err);
        res.send(products);
    })
}
exports.create = (req,res)=>{
    var product = req.body;
    dao.create(product,(err,product)=>{
        if(err) console.log(err);
        res.send(product);
    })
}
exports.update = (req,res)=>{
    var product = {
        "name":req.body.name,
        "price":req.body.price
    };
    dao.update({_id:req.params.id},product,(err,product)=>{
        if(err) console.log(err);
        res.send("Product Updated!!");
    })
}

exports.delete = (req,res)=>{
    dao.delete({_id:req.params.id},(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    })
}