import options from './options/mysql.js';
import knex from 'knex';

const database = knex(options);

const cars = [
    {brand:"lamborgini", price:"21321321"},
    {brand:"Ferrario", price:"321325465"},
    {brand:"Chevrolet", price:"32132132"},
    {brand:"Porche", price:"2132132"},
    {brand:"VW", price:"5646546"}
]
database('cars').insert(cars).then(result=>console.log(result)).catch(console.log).finally(()=>database.destroy());
//Exist tmb el metodo jsonInsert, que inserta desde un json.