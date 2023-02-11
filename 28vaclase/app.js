
import express from 'express';
import {fork} from 'child_process'

const app = express();
app.listen(8080, ()=> console.log(process.cwd())) //current working directory
/*
async function sumar() {
    let suma = 0
    for(let i = 0; i<5e9;i++){
        suma += i
    }
    return suma;
}
*/
let visitas = 0;

app.get('/suma', async (req, res) => {
    let suma = await sumar()
    res.send(`La suma es ${suma}`)
});

app.get('/sumaFork', (req, res) => {
    const child = fork('./operacionCompleja.js')
    child.send('Luke soy tu padre!') //ejecuta su accion, con un async real de SO
    child.on('message', value => { //el padre manda msj al hijo
    res.send(`El resultado forkeado es ${value}`)
    })
});

app.get('/visitas', (req, res) => {
    res.send(`Visitado ${++visitas} veces`)       //al ejecutar ambos endpoints queda pensando porque se procesan com un solo thread aunque sea async
});

/*const connection = mongoose.connection('', error => {
    if(error){
        logger.FATAL();
        process.exit(); //manipulacion de procesos por errores excepcionales.
    }
})
*/
/*
tasklist en cli mustra los procesos que estan corriendo en el momento.
En cli ejecutando nodemon en otra cosola: tasklist /fi "imagename eq node.exe" 
*/ 

app.get('/', (req, res) => {
    process.exit(); 
    res.send('ok'); //unreachable code
});

process.on('exit', event => {
    //db.disconnect()  //ejemplo
    console.log("Saliendo...")
})

process.on('uncaughtException', exception => {
    console.log("Algo salio mal.")
})

//Child process permite ejecutar tareas en multihilo.
