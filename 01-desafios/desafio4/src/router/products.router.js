import { Router } from "express";
import Manager from "../manager/manager.js";

const router = Router();
const productService = new Manager('src/files/products.json');



router.get('/', (req,res) => {
    let arrayProducts = productService.getAll();
    //if (arrayProducts.length === 0) return res.status(204).send({status:"No hay productos cargados."})
    res.send(arrayProducts);
})

router.get('/:id', (req,res) => {
    if (isNaN(req.params.id)) return res.status(400).send({error:"El parametro debe ser numérico."});
    if (parseInt(req.params.id) < 1 ) return res.status(400).send("No hay producto con ese numero de ID"); // || parseInt(req.params.id) > arrayProducts.length
    let product = productService.getById(parseInt(req.params.id));
    if (Object.keys(product).length === 0) return res.status(400).send("No hay producto con ese numero de ID");
    res.send(product);
})

router.post('/', (req,res) => {
    let newProduct = req.body; //recibe un json parseado
    let addedProduct = productService.add(newProduct);
    res.send({status:"success",addedProduct:addedProduct});
})

router.put('/:id', (req,res) => {
    let arrayProducts = productService.getAll();
    if (isNaN(req.params.id)) return res.status(400).send({error:"El parámetro debe ser numérico."});
    if (parseInt(req.params.id) < 1 || parseInt(req.params.id) > arrayProducts.length) return res.status(400).send("No hay producto con ese numero de ID");
    let updated = productService.update(parseInt(req.params.id), req.body);
    res.send({status:"success",updated:updated})
})

router.delete('/:id', (req,res) => {
    let arrayProducts = productService.getAll();
    if (isNaN(req.params.id)) return res.status(400).send({error:"El parámetro debe ser numérico."});
    if (parseInt(req.params.id) < 1 || parseInt(req.params.id) > arrayProducts.length) return res.status(400).send("No hay producto con ese numero de ID");
    let updatedArr = productService.deleteById(parseInt(req.params.id));
    res.send({status:"success",updatedArray:updatedArr});
})



export default router;