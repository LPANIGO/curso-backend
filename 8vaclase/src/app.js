import express  from 'express';
import userRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';
import petsRouter from './routes/pets.router.js'
import __dirname from '../../26taclase/src/utils.js';
const app = express();
const server = app.listen(8080, () => console.log("Listening on port 8080"));

/*middleware nivel aplicacion:
Son elementos intermediarios para evaluar o agregar cosas ANTES que lleguen al endpoint.
Si este middleware tiene sentido solo para una ruta en particular lo meto en el router correspondiente.
*/
// app.use((req,res,next) => {
//     let user = req.query.user;
//     if(user === "Mauricio") return res.status(401).send({error:"Not authenticated"}) //?user=Mauricio
//     next();
// })

//Middleware nivel aplicación: para poder recibir objetos y arreglos. (linea 22)
//Esta a nivel aplicacion porque se usa en todas las peticiones.
//Los siguientes middlewares ya tienen incoporados sus next().
app.use(express.json()); 
app.use('/users', userRouter);
app.use('/productos', productsRouter);
app.use('/pets', petsRouter);
app.use(express.static(__dirname+'/public'));  //Para el servicio de archivos estaticos se utiliza la funcion de middleware incorporada express.static. Agrego un prefijo en el paramatro 1.


