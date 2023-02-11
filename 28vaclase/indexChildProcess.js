import {exec} from 'child_process';

//exec('mkdir', (error,stdout,stderror)=> { //dir es qeuivalente a list, puedo correr comandos
exec('node ./index.js', (error,stdout,stderror)=> { //puedo correr comandos
    if(error) {
        console.log(`error: ${error.message}`)
    }
    if(stderror){
        //cuando si pudo procesar el comando, pero algo fallo al querer devolver un resultado
        console.log(`error: ${stderror}`)
    } else {
        console.log(`${stdout}`)
    }
})