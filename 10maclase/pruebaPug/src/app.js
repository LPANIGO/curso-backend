import express from 'express';
import __dirname from './utils.js';

const app = express();

const server = app.listen(8080, ()=>console.log("Listening on 8080"));

//pug engine ya esta auto configurado cuando ya lo indico como view engine.
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

let users = [
    {first_name: "Donacio", last_name:"Doclesiano"},
    {first_name: "Donacio", last_name:"Doclesiano"},
    {first_name: "Donacio", last_name:"Doclesiano"},
    {first_name: "Donacio", last_name:"Doclesiano"}
]

app.get('/', (req,res)=> {
    res.render('welcome.pug', {
        message: "Hello with Pug."
    })
})

app.get('/datos', (req,res)=>{
    let {min,max,value,title} = req.query;
    res.render('medidor.pug', {
        min,
        max,
        value,
        title,
        users
    })
})