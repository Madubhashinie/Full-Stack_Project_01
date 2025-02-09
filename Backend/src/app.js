
import express from 'express';

const app = express();
import { productRouter } from './api/products.js';
import globalErrorHandlingMiddleware from './api/middleware/global-error-handling-middleware.js';

app.use(express.json()); // For parsing JSON requests

/*app.use((req, res, next) =>{
    console.log("Request recieved");
    console.log(req.method, req.url);
    next();
});*/



//app.get('/products', getProducts)
//app.post('/products', createProduct)

//app.get('/product/:id', getProduct)
//app.delete('/product/:id', deleteProduct)
//app.patch('/product/:id', updateProduct)

app.use('/api/products', productRouter);
app.use(globalErrorHandlingMiddleware);

app.listen(8000, () => console.log(`Server running on port ${8000}`));