const axios = require('axios');
const url = 'http://localhost:8000/productapi/products';
function getProducts(){
    axios.get(url).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.error(err);
    })
}

function saveProduct(){
    var product = {
        "name":"Samsung",
        "price":1000
    };

    axios.post(url,product).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.error(err);
    })
}

function updateProduct(){
    var product = {
        "name":"Samsung",
        "price":1200
    };

    axios.put(url+'/5f0ff9b5b044ea34fdc5a584',product).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.error(err);
    })
}

function getProduct(){
    axios.get(url+'/5f0ff9b5b044ea34fdc5a584').then(res=>{
        console.log(res.data);
    }).catch(err=>{
        console.error(err);
    })
}

function deleteProduct(){
    axios.delete(url+'/5f0ff9b5b044ea34fdc5a584').then(res=>{
        console.log(res.data);
    }).catch(err=>{
        console.error(err);
    })
}

//getProducts();
//saveProduct();
//updateProduct();
//getProduct();
deleteProduct();












