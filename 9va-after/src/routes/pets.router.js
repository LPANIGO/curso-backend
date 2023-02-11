import { Router } from "express";
import petManager from '../managers/PetsManager.js'
import { uploader } from "../utils.js";

const router = Router();
const petService = new petManager();

router.post('/', uploader.single('image'), async(req, res) => { //el param de single debe tener el mismo nombre que el campo file en el html
    const {name,species,age} = req.body;    //destructuring
    //se podria agregar un middleware que valide los inputs o podria delegar esa validacion al front.
    if(!req.file) res.status(500).send({status:"error", error:"Couldn't upload file"})
    if(!name||!species||!age) return res.status(400).send({status:"error",error:"Incomplete values"});
    let pet = {
        name,
        species,
        age,
        image:req.file.filename
    }
    await petService.add(pet);
    res.send({status:"success", message:"Pet created"});
})

export default router;