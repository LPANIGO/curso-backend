import {Router} from 'express';
import uploader from '../utils.js';

const router = Router();


const pets = [];

router.use((req,res,next) => {
    req.papaconqueso = "papa";
    next();
})
/* middleware nivel ruta (lo uso solo en una ruta). Tmb existe middleware nivel router*/     
const middlewareAutenticacionDeMascotas = (req,res,next) => {
    let a=1;
    next();
}

router.get('/', middlewareAutenticacionDeMascotas,(req,res) => {

});

router.post('/', uploader.single('file') , (req,res) => { //el nombre del parametro de single tiene que ser el mismo que el de la etiqueta html input.
    console.log(req.file);
    let pet = req.body;
    pet.image = req.file.filename; //o req.file.path; //multer te devuelve en el atributo path la ruta del recurso ahora cargado como estatico (en public).
    pets.push(pet);
    res.send({status:"success",message:"pet added"});
})

/*
router.post('/' , (req,res) => { 
    let pet = req.body;
    console.log(pet);
    if (!pet.name) return res.status(400).send({status:"error",error:"Invalid input"});
    pets.push(pet);
    res.send({status:"success",message:"pet added"});
})
*/

router.put('/', (req,res) => {
    
})

router.delete('/', (req,res) => {
    
})

export default router;