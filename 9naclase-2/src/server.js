import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
const app = express();

const server = app.listen(8080, () => console.log("Listening on port 8080"));

app.use(express.static (__dirname + '/public')); //para poder ejecutar el codigo desde cualquier directorio.

/*
    Template engine config
*/
app.engine('handlebars', handlebars.engine()); //esto instancia el motor.
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars'); //esto reaciona el motor con sus vistas.

app.use('/', viewsRouter);
app.use('/api/users', usersRouter); 
//tal vez tenga una vista con la ruta usuarios, por eso agrego api a la ruta para diferenciar una vista de una api con el mismo nombre.