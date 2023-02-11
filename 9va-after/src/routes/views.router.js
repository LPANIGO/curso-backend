import { Router } from 'express';
import PetManager from '../managers/PetsManager.js';


const router = Router();
const petService = new PetManager();

router.get('/', (req, res) => {
    res.render('welcome'); //a diferencia de un .send me permite renderizar una vista a partir de mi motor de plantillas en lugar de simplemente enviar la data.
})

router.get('/newPet', (req,res) => {
    res.render('newPet')
})

router.get('/pets', async(req,res,) => {
    let pets = await petService.getAll();
    console.log(pets);
    res.render('pets', {pets, name:"Leo"}); 
})

export default router;