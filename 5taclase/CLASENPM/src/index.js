//const moment = require('moment'); //es lo mismo que import, pero no funciona si en package.json aclaro "type":"module".
import moment from 'moment'; //si funciona con "type":"module" de ES 6
// import papa from 'papaconqueso';

// papa.papaLog("Hola! :)")

let date = moment("2020-12-22");
// console.log(date.isValid());

let today = moment();
let birthday = moment('1994-01-12');
console.log(`Naci el 12 de enero ${birthday.format('DD/MM/YYYY')}`);

console.log(`Desde mi nacimiento pasaron ${today.diff(birthday,'days')} dias.`);