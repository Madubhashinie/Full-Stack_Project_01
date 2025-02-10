
import express from 'express';

import 'dotenv/config.js';
import { productRouter } from './api/products.js';
import globalErrorHandlingMiddleware from './api/middleware/global-error-handling-middleware.js';
import { connectDB } from './infrastructure/db.js';
import { categoryRouter } from './api/category.js';

const app = express();
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
app.use("/api/categories", categoryRouter);
app.use(globalErrorHandlingMiddleware);

connectDB();
app.listen(8000, () => console.log(`Server running on port ${8000}`));