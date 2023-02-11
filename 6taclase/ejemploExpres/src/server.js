import express from 'express';
import moment from 'moment';

const app = express(); //Express ya crea el servidor. No se escribe new express, no es una clase, es un modulo. 
const PORT = 8080;

let counter = 0;

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

app.get('/', (req,res) => {    // '/' esto es una ruta base. En esta linea configuro la ruta. Mi end point de ruta base "/" me lleva al recurso de h1 y texto que le sigue.
    res.send("<h1>holaaa</h1> Finalmente, bienvenido a Express."); 
} )

app.get('/visitas',(req,res) => {  //Este es otro endpoint con su propio recurso y ruta.
    counter++;
    res.send(`El end point se ha visitado ${counter} veces.`);
})

app.get('/papaconqueso',(req,res) => { //ya tengo dos ruteos diferentes para el mismo puerto.
    res.send("Papa con queso");
})

app.get('/fyh',(req,res) => {
    let currentTime = moment();
    res.send(`La hora es ${currentTime.format("DD/MM/YYYY hh:mm:ss")}`);
})

app.get ('/info', async (req,res) => {  
    //escribo en navegador: localhost:8080/info?role=user    
    // ? está relacionado a query, y lo que le sigue es la informacion que meto en la query, recibiendola como un objeto.        
    //  si quiero mandar mas de una query agrego &:  localhost:8080/info?role=user&guitarra=guitarra

    console.log(req.query);
    let role = req.query.role;  // req.query es un objeto.

    if (!role) return res.send("No se envio un rol, favor de definir rol para enviar la info.") 
    //si llegó hasta este punto si envió un rol.
    if (role!='admin') return res.send("Informacion confidecial.")
    //si llegó hasta este punto si es admin
    res.send("Aqui esta la info.")
})