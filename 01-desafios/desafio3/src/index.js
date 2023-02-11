import Manager from './manager/manager.js';
import express from 'express'

const manager = new Manager('src/files/productos.json');

const app = express();
const PORT = 8081;

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

let arrrayProductos = await manager.getAll(); //ES NECESARIO USAR AWAIT ACA?

app.get( '/productos', (req,res) => {
    
    res.send(arrrayProductos)
})

app.get( '/productoRandom', async(req,res) => {
    let randNum = Math.floor(Math.random()*arrrayProductos.length+1)
    let producto = await manager.getById(randNum);
    res.send(`Producto random: ${producto}`);
})


