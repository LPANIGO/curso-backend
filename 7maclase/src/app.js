import express from 'express';

const app = express();
const server = app.listen(8080, () => console.log('Listening on port 8080'));

let sentence = 'Hola Express como estas?';

//Mi servidor tiene que estar configurado para que express pueda recibir JSON.
app.use(express.json());
//Lo siguiente se utiliza cuando desde la URL tengo codificada informacion mas compleja; para enviar arrays y objetos desde la url.
//app.use(express.urlencoded({extended:true}));

app.get('/api/frase', (req,res) => {
    res.send({sentence}); //send envia por defecto 200.
})

app.get('/api/letras/:num', (req,res) => {
    if (isNaN(req.params.num)) return res.status(400).send({error:"El parametro debe ser numérico"});
    if (parseInt(req.params.num)<1||parseInt(req.params.num)>sentence.length) return res.status(400).send("No hay letra con este índice.");
    let num = parseInt(req.params.num);
    res.send({letter:sentence[num-1]});
    // res.send({letter:sentence.charAt(num-1)}); //forma alternativa a la sentencia anterior.
})


app.get('/api/palabras/:pos', (req,res) => {
    if (isNaN(req.params.pos)) return res.status(400).send({error:"El parametro debe ser numérico"});
    if (parseInt(req.params.pos)<1||parseInt(req.params.pos)>sentence.split(' ').length) return res.status(400).send("No hay palabra con este índice.");
    res.send({word:sentence.split(' ')[parseInt(req.params.pos)-1]})
    
})

app.post('/api/palabras', (req,res) => {
    let newWord = req.body.word;
    sentence = sentence.concat(` ${newWord}`);
    // forma alternativa a lo anterior.
    // console.log(typeof newWord);
    // sentence = sentence.split(' ');
    // sentence.push(newWord);
    // sentence = sentence.join(" ");

    let position = sentence.split(' ').indexOf(`${newWord}`)+1;
    console.log(position);
    console.log(sentence);
    res.send({added:newWord, position:position});

})

app.put('/api/palabras/:pos', (req,res) => {
    let newWord = req.body.word;
    if (isNaN(req.params.pos)) return res.status(400).send({error:"El valor debe ser numérico"});
    if (parseInt(req.params.pos)<1||parseInt(req.params.pos)>sentence.split(' ').length) return res.status(400).send("No hay palabra con este índice.");
    let newSentence = sentence.split(' ');
    let oldWord = newSentence[parseInt(req.params.pos-1)];
    newSentence[parseInt(req.params.pos-1)] = newWord;
    sentence = newSentence.join(' ');
    res.send({previous:oldWord,updated:newWord})
})

app.delete('/api/palabras/:pos', (req,res) => {
    if (isNaN(req.params.pos)) return res.status(400).send({error:"El valor debe ser numérico"});
    if (parseInt(req.params.pos)<1||parseInt(req.params.pos)>sentence.split(' ').length) return res.status(400).send("No hay palabra con este índice.");
    let newSentence = sentence.split(' ');
    newSentence.splice(parseInt(req.params.pos)-1 , 1); //el segundo parametro del splice indica cuantos elementos quito a partir de la posicion anterior.
    sentence = newSentence;
    res.send({message:"Word deleted."})
});


//END POINTS EJEMPLO USUARIO
/*
let users = [
    "Maria",
    "Manuel",
    "Mauricio",
    "Papa"
]

//queryParams != Params
app.get('/users', (req,res) => {
    res.send(users);
})

app.get('/users/:userId', (req,res) => { //end point con ":userId" como extension para hacer busqueda de algo especifico.
    console.log(req.params);
    let id = req.params.userId;
    res.send(users[id-1]);
})
*/