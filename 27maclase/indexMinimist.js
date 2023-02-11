import minimist from "minimist";

/*
console.log(process.argv); // en un objeto inicial que viene intrincenco para ejecutar nuestro codigo js en node.
//argv devielve dos argumentos iniciales, dos rutas.


Pasaje de argumentos:
node index.js 1 5 4 "v"


*/

//========================================
/*
//Librerias para manejar argumentos> Minimist, Yargs, y Comander.
const args = minimist(process.argv.slice(2), { alias:{m:"MODE",p:"PORT",d:"DEBUG"},default:{m:"PRODU",p:0,d:false} }); 
//Los args se convierten en un objeto, y el segundo parametro es un objeto de configuracion. Alias te dice como se iterpreta cada inicial.
console.log(args);
//minimist convierte el archivo de process en un objeto.
// node indexMinimist.js 1 5 4 "v" -a -y -v 2
//node indexMinimist.js -m DEV
// para argumentos de palabra completa uso doble guion: --version
*/
//========================================
/*
//destructurando args
const {
    mode,
    v,
    p
} = minimist(process.argv.slice(2), {default:{mode:"PRODUCCION"}, alias:{v:'version'}});
const args = minimist(process.argv.slice(2), {default:{mode:"PRODUCCION"}, alias:{v:'version'}});
//Cuando trabaje con entornos, y tenga una plataforma donde suba mi servidor voy a poder setear un entorno con el modo, port, etc.
//Pero para programas que no requieran un entorno particular ahi si se utilizan los argumentos.
//node indexMinimist.js -v
console.log(mode, v)
console.log(args)
*/

//========================================

const {
    MODE,
    PORT,
    DEBUG,
    _
} = minimist(process.argv.slice(2), {alias:{m:"MODE",p:"PORT",d:"DEBUG"},default:{m:"PRODU",p:0,d:false}});

const config = {
    mode: MODE,
    port: PORT,
    debug: DEBUG,
    others: _
}
console.log(config);
//  node indexMinimist.js 1 2 3 -m dev -p 8080 -d
export default config;

//========================================