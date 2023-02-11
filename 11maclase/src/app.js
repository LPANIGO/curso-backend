import express from 'express';
import __dirname from './utils.js';
import { Server } from 'socket.io';


const app = express();

const server = app.listen(8080, console.log("Listening on port 8080."));
const io = new Server(server); 
//con esto mi servidor maneja tanto HTTP como el modelo o protocolo de sockets TCP sin tener que desplegar dos servidores diferentes.
//io es su propio servidor pero esta conectado y configurado dentro de la misma estructura del servidor actual
//io comparte el evento "listen" con server.

app.use(express.static(__dirname+"/public"));

io.on('connection', socket => {
    //socket va a representar el cliente que se haya conectado en el evento.
    //CUERPO DE EVENTOS DE SOCKET
    //todo socket se basa en .on y .emit
    //.on escucha el evento
    //socket.emit envia el evento solo al socket conectado
    //io.emit envia a todos los conectados.

    console.log("cliente conectado en socket:" + socket.id);
    socket.on('saludo', data => {
        console.log(data);//Recibe el objeto del front sin parsearlo, sin express.json, sin formData, etc.
        
    });
    // socket.emit('Pokemons',["p1","p2","p3"]);
    socket.on('message', data=> {
        io.emit('log', `${socket.id} dice: ${data}`);
    })
})

