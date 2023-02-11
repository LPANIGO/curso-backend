import {Router} from 'express';
import userSerice from '../models/User.js';
import { createHash } from '../utils.js';

const router = Router();

router.post('/register', async(req,res)=> {
    // console.log(req.body);
    // res.send(req.body);

    const {name, email, password} = req.body;
    if (!name || !email || !password) return res.status(400).send({status:"error",error:"Incomplete values"});

    const exists = await userSerice.findOne({email:email});
    if(exists) return res.status(400).send({status:"error",error:"User already exists"});

    const newUser = {
        name,
        email,
        password: createHash(password)
    }
    let result = await userSerice.create(newUser);
    res.send(result);
})

export default router;