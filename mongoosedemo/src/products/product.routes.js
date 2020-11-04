import controller from './product.controller';


module.exports=(router)=>{
    router.get('/products',controller.getAll);
    router.post('/products',controller.create);
    router.put('/products/:id',controller.update);
    router.delete('/products/:id',controller.delete);
}