import passport from 'passport';
import local from 'passport-local';
import userService from '../models/User.js';
import { createHash, isValidPassword  } from '../utils.js';

const LocalStrategy = local.Strategy;

//passport lo vamos vamos a usar para mover la logica de registro y login en un solo archivo:
const initializePassport = () => {
    passport.use('register', new LocalStrategy({passReqToCallback:true, usernameField:"email"}, //las estrategias locales de passport funcionan con un username (en este caso "email") y un password
    async(req, email, password, done) => { //done es su funcion de resolucion de todo, es una mezcla entre validacion de usuario y un next
        try {
            const {name} = req.body;
            if (!name || !email || !password) return done(null, false, {message:"Incomplete values"});
            const exists = await userService.findOne({email:email});
            if(exists) return done(null, false, {message:"User already exists"});
            const newUser = {
                name,
                email,
                password: createHash(password)
            }
            let result = await userService.create(newUser); //esto llega a la ruta register
            //SI TODO SALIO BIEN EN LA ESTRATEGIA
            return done(null, result);
        } catch (error) {
            done(error);
        }
    }))
    
    passport.use('login', new LocalStrategy({usernameField:'email'}, async (email,password,done) => {
        if (!email || !password) return done(null,false,{message:"Incomplete values"});
        let user = await userService.findOne({email:email});
        if(!user) return done(null,false,{message:"Incorrect credentials"});
        if(!isValidPassword(user,password)) return done(null,false,{message:"Incorrect password"});
        return done(null,user);
    }))

    passport.serializeUser((user, done) => { //agarro un usuario y le correspondo una referencia (su id)
        done(null, user._id);
    })
    passport.deserializeUser(async(id,done)=>{ //me mandas un id de manera interna en passport y yo obtengo ese usuario
        let result = await userService.findOne({_id:id});
        return done(null,result);
    })
}

export default initializePassport;