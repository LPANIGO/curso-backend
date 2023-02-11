import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);

database('cars').where('price','<=','123').update({price:150000}).then(()=>console.log("updated"))
.catch(console.log).finally(()=>database.destroy());