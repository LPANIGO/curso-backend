import {Router} from 'express';
import userService from '../models/User.js';
import { createHash, isValidPassword } from '../utils.js';
import passport from 'passport';

const router = Router();

router.post('/register', passport.authenticate('register',{failureRediect:'/api/sessions/registerfail'}),async(req,res)=> {
    console.log(req.user);
    res.send({status:"success",payload:req.user._id});
})

router.get('/registerfail', async (req, res) => {
    console.log("Something went wrong");
    res.status(500).send({status:"error",error:"Server error"});
});

router.post('/login', passport.authenticate('login',{failureRediect:'/api/sessions/loginfail'}),async (req, res) => {
    req.session.user = {
        name: req.user.name,
        email: req.user.email,
        id: req.user._id
    } 
    //a partir de la tabla de sesiones gestiona un session id 
    //y lo relaciona con el usuario que acabamos de crear, el session id se guarda en una cookie.
    res.send({status:"success",payload:req.session.user})
});

router.get('/loginfail', (req, res) => {
    res.status(500).send({status:"error",error:"Login error"});
});
export default router;