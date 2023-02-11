import express from 'express';
import services from './dao/index.js'
const app = express();
const server = app.listen(8080, () => console.log("Listening on port 8080"));

app.use(express.json());

app.get('/products', async (req, res) => {
    let results = await services.productsService.getAll();
    res.send(results);
});

app.post('/products', async (req, res) => {
    let results = await services.productsService.save(req.body);
    res.send(results);
});