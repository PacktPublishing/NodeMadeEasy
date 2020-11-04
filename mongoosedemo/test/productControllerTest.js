let chai = require('chai');
let chaiHttp= require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Product API',()=>{
    it('Get All Products',()=>{
       return chai.request('http://localhost:8000/productapi').get('/products').then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })

    it('Create Product',()=>{
        return chai.request('http://localhost:8000/productapi')
        .post('/products')
        .send({"name":"Samsung","price":1000})
        .then((res)=>{
             expect(res).to.have.status(200);
         }).catch((err)=>{
             throw err;
         })
     })

     it('Get Single Product',()=>{
        return chai.request('http://localhost:8000/productapi')
        .get('/products/5f1ac213c644930dd9a622bb')
        .then((res)=>{
             expect(res).to.have.status(200);
         }).catch((err)=>{
             throw err;
         })
     })
})