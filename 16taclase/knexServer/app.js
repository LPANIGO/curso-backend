//import db from './db/sqlBase.js'; //opcion mysql
import db from './db/sqlite.js'; //opcion utilizando sqlite
import express from 'express';

const app = express();
const server = app.listen(8080, ()=>console.log("Listening"));

let pets = [
    {name:"patas",specie:"pez",age:1},
    {name:"aletas",specie:"perro",age:2},
    {name:"orejas",specie:"conejo",age:4}
]

app.get('/pets',async(req,res)=>{
    try {
        let pets = await db('pets').select('*');
        res.send(pets);
    } catch(error) {
        res.status(500).send("Can not get pets");
    }
})

//el siguiente insert se podria hacer mediante post con body.
app.get('/insert', async(req,res)=>{  //al momento de viajar por este medio la informacion de la bd se "deshidrata". solo se deshidrata cuando hago una operacion interna en el servidor.
    try {
        let result = await db('pets').insert(pets);
        res.send(result);
    } catch (error) {
        res.status(500).send("Can not insert pets");
    }
})