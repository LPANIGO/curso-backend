import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import petsRouter from './routes/pets.router.js';

const app = express();

const server = app.listen(8080, ()=>console.log("Listening on 8080"));

app.engine('handlebars', handlebars.engine()); //esto entre parentesis permite que express reconozca que necesita trabajar con un motor, y  por fuera configura el motor dentro de expres.
app.set('views',__dirname+'/views'); //cuando hago un render expres tiene claro donde esta la carpeta de vistas para renderizar.
app.set('view engine', 'handlebars'); // asocio las vistas al motor.

app.use(express.json()); //si bien lo envio como formData, en el req puede que multer lo envie de otra forma. Por seguridad agregp esta lina.
app.use(express.static(__dirname + '/public'));

app.use('/', viewsRouter);
app.use('/api/pets', petsRouter);

