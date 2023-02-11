import { Router } from 'express';
import __dirname from '../utils.js';

const router = Router();

console.log(__dirname + '/files');
//Si utilizo dirname tener en cuenta que es absolut a partir desde donde se utilice. 
//Entonces corroboro con console.og si la ruta es correcta para este archivo.

router.get('/', (req,res)=> {
    res.render('chat');
})

export default router;