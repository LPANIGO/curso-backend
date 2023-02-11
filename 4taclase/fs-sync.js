const fs = require('fs'); //require es una palabra para requerir un modulo externo, que no esta en mi proyecto. Podria ser agregado con import tmb pero no esta totalmente estandarizado todavia.

//Aqui elegimos operaciones sincronas dentro de fs, es decir BLOQUEANTES pq bloquea las siguientes intrucciones a la que esta en proceso.

//ESCRIBIR
fs.writeFileSync('./primerarchivo.txt', 'Prueba de write...');
// toda operacion write sobreescribe el contenido.

//LEER
// let contenido = fs.readFileSync('./primerarchivo.txt', 'utf-8');
// console.log(contenido);
//ejemp. encoding: utf-8


//ACTUALIZAR
// fs.appendFileSync('./primerarchivo.txt', 'Hola, soy una actualización...');
//es peligroso actualizar con append, puede destruir el orden de la informacion u objetos en el archivo actualizado


//ELIMINAR
// fs.unlinkSync('./primerarchivo.txt');


//ERRORES EN EJECUCION
try  {
    let contenido = fs.readFileSync('./primerarchivo.txt', 'utf-8');
    console.log(contenido);
} catch {
    console.log("\n \tEl archivo no existe en ruta.\n \tError type: no such file or directory.\n");
}
// ENOENT err: error no such file or directory


//ESCRIBIR asynchronous
// console.log('Escribieno archivito...');
// fs.writeFile('./primerarchivo.txt', 'Prueba de write...');
// console.log('Archivito escrito');