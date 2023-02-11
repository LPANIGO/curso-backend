import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);


//DEVUELVE OBJETO HIDRATADO database('cars').select('*').then(result=>console.log(result)).catch(error=>console.log(error)).finally(()=>database.destroy());
//DEVUELVE OBJETO DESHIDRATADO:
database('cars').select('*').then(result=>console.log(JSON.parse(JSON.stringify(result)))).catch(error=>console.log(error)).finally(()=>database.destroy());

