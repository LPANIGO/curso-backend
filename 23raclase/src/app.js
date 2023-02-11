import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session'; 
//1 le indico al servidor que trabajo con sesiones de usuario.
//2 al trabajar con sesiones de usuario el server va a necesitar un espacio donde guardar la info de esa sesion
//3 un vez definido donde va a guardar esas sesiones el servidro va a esta relacionando a partir de un mapeo de la
// info de la sesion del usuario y un identificador unico para esa informacion.
//4 ese id de la tabla hashmap va a guardarlo en una cookie.
//5 la cookie se manda al cliente
//6 cada vez que el cliente haga una peticion yo corroboro en esa cookie de sesion.  

const app = express();
const server = app.listen(8080, () => console.log("Listening :) "));


app.use(cookieParser("Secret")); //va a mezclarlo con la string para que no sea facilmente accesible.
app.use(express.json());
app.use(session({
    secret:"CoderSession3000",
    resave:true,
    saveUninitialized:true
})) //crea una cookie aun sin tener endpoint, con su propio identificador. Trabajamos ahora con STATEFUL.

app.get('/counter', (req, res) => {
    if(req.session.counter){
        req.session.counter++;
        res.send(`Hola de nuevo! visitaste este sitio ${req.session.counter} veces.`)
    } else {
        req.session.counter=1; //Agrega un atributo y valor al objeto session (la cookie). 
        res.send("Bienvenido :D");
    }
});

//logeo
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    if(email==="correo@correo.com"&&password=="123"){
        req.session.user = {
            email,
            role:"user"
        }
        return res.send("Logged in :)")
    } else {
        return res.send("Incorrect credentials")
    }
});
//acceder a su info
app.get('/current', (req, res) => {
    if(req.session.user){
        res.send(req.session.user);
    }else {
        res.send("Please login first");
    }
});
//deslogear
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) return res.send("Couldn't logout")
        else return res.send("Logged out")
    })
});


//DESAFIO POR POSTMAN ===========================================
app.post('/setCookie', (req, res) => {
    const {name,value,expiresAtInSeconds} = req.body;
    //if (!expiresAtInSeconds) expiresAtInSeconds = 0;
    res.cookie(name,value,{
        maxAge: expiresAtInSeconds?expiresAtInSeconds*10000:0 //alternativa al if
    }).send("Aqui está tu cookie personalizada XD")
});

app.get('/logOutPostman/:name', (req, res) => {
    const {name} = req.params;
    if (!name) return res.send("Name not found");
    res.clearCookie(req.params.name).send("Adios cookie!");
});
//=============================================================

app.get('/cookies', (req, res) => {
    res.cookie('primeraCookie',{a:1, b:"Numero dos."}).send("Cookie fantastico :D ")
});

app.get('/cookieExpire', (req, res) => {
    res.cookie('AdiosCookie', 'Cookie temporal', {
        maxAge:10000
    }).send("Cookie que expira...")
});

app.get('/galletitas', (req, res) => {
    res.send(req.cookies);
});

//borrar una cookie
app.get('/logout', (req, res) => {
    res.clearCookie('primeraCookie').send('Logged out')
});

app.get('/cookieSecret', (req, res) => {
    res.cookie('cookieBlindada',{nombre:"Magnus",email:"magnusiano@correo.com"},{
        signed:true
    }).send("Cookie blindada.")
}); //una cookie signed que es modificada no puede ser mas utilizada y aparece con valor false.

app.get('/galletitasUltraSecretas', (req, res) => {
    res.send(req.signedCookies);
});