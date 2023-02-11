import { Router } from 'express';

const router = Router();

const users = [];

/*Middleware de  Router*/
router.use((req,res,next) => {
    let user = req.query.user;
    if(user === "Mauricio") return res.status(401).send({error:"Not authenticated"}) //?user=Mauricio
    next();
})

router.get('/', (req,res) => {

});

router.post('/', (req,res) => {
})

router.put('/:uid', (req,res) => {
    
})

router.delete('/:uid', (req,res) => {
    
})

export default router;