import express from 'express';
import session from 'express-session';
//import storage from 'session-file-store';
import MongoStore from 'connect-mongo';

const app = express();
//const FileStorage = storage(session);


app.use(express.json());
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://leopanigo:Mongo2.0@clusterdeprueba.ozm98v9.mongodb.net/BaseSession?retryWrites=true&w=majority',
        ttl:20
    }),//atlas mongo elimina las sessions automaticamente.
    //store: new FileStorage({path:'./session',ttl:20,retires:0})
    //store: new FileStorage({path:'./session',retires:0}),//cuando no quiero que el storage sea en memoria sino en  la carpeta session.
    //ttl=time to live, cuanto tiempo inactivo está el usuario en la sesion.
    //retries=cuando intento reconectar con mi sesion una cierta catidad de veces.
    secret:"superSecret",
    resave:false,
    saveUninitialized:false,
    cookie: {

    }
}));
//se genera una carpeta session con un json que tiene un time stamp.
const server = app.listen(8080, ()=>console.log("Listening :D"));


app.get('/', (req, res) => {
    res.send("Hola!");
});

app.get('/login', (req, res) => {
    const email = "Manu"; //simulamos que viene la info del front
    //es equivalente a const email = req.body.email
    const role = "user";
    req.session.user = {
        email,
        role
    }
    res.send("Logueado")
});

app.get('/visita', (req, res) => {
    if(req.session.counter) {
        res.send(`Visitado ${++req.session.counter} veces.`)
    } else {
        req.session.counter = 1;
        res.send("Bienvenido");
    }
});
