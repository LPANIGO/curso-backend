import express from 'express';
import productsRouter from './router/products.router.js';


const app = express();
const server = app.listen(8080, () => console.log("Listening on port 8080"));

app.use(express.json());
// app.use(express.static('public'));

app.use('/api/products', productsRouter);