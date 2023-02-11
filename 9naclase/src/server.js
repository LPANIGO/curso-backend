import express from 'express';
import __dirname from './utils.js';

const app = express();

const server = app.listen(8080, () => console.log("Listening on port 8080"));

app.use(express.static (__dirname + '/public')); //para poder ejecutar el codigo desde cualquier directorio.