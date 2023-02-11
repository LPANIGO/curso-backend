import dotenv from 'dotenv'; //para trabajar con multientornos

const mode = process.argv.slice(2)[0];
console.log(mode)
dotenv.config({
    path:mode==="PROD"?'./.env.production':'./.env.development'
});//Lee el archivo .env y permite correr variables de entorno solo con un archivo .env, sin necesidad de correro desde el debug

export default {
    app: {
        MODE: process.env.MODE||'PROD', //el port no esta en config generalmente
        PORT: process.env.PORT||8080,
        DEBUG: process.env.DEBUG||false
    },
    mongo: {
        MONGO_URL: process.env.MONGO_URL,
        MONOG_USER: process.env.MONOG_USER
    }
    
} //si alguien llega a tener acceso a mi repo no va a poder ver mis variables, como la contraseñas, porque todo esta en mi launch.json
//node indexEnvironment.js PROD