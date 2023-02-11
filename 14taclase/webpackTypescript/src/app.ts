import express from 'express';
import Person from './person';
import { getTime } from './lib/utils';

const app= express();
const PORT = 8080;

const person1 = new Person("Francisco", "Maldonado");
app.get('/', (req ,res) =>{
    res.send({
        time:getTime(),
        name:person1.getFullName()
    })
})

app.listen(PORT, ()=>console.log("Listening on PORT 8080"));
