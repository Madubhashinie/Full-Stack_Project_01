
import express from 'express';

const app = express();
import { productRouter } from './Routes/products';

app.use(express.json()); // For parsing JSON requests


app.use('/products', productRouter)

//app.get('/products', getProducts)
//app.post('/products', createProduct)

//app.get('/product/:id', getProduct)
//app.delete('/product/:id', deleteProduct)
//app.patch('/product/:id', updateProduct)

app.listen(8000, () => console.log(`Server running on port ${8000}`));