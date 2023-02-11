import express from 'express';
import __dirname from './utils.js';

const app = express();

const server = app.listen(8080, console.log("Listening on 8080 port"));

app.use(express.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

let pets = [
    {name:"Pompon", species:"Conejo"},
    {name:"Terron", species:"Cuis"}
]

let users = []

app.get('/', (req,res) => {
    res.render('home', {
        title:"Primera plantilla ejs",
        pets
    })
})

app.get('/form', (req,res)=>{
    res.render('form', {users});
})

app.post('/users', (req, res)=> {
    const user = req.body;
    console.log(user);
    users.push(user);
    res.redirect('/form');
    // res.send({status:"success",message:"user created"})
})