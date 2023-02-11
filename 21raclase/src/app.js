import express from 'express';
import faker from 'faker';
//npm install faker@5.5.3

const app = express();
const serer = app.listen(8080, () => console.log("Listening on port 8080 :)"));

// const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
// const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']
// app.get('/test', async (req, res) => {
//     let testUsers = [];
//     for (let i=0; i<10;i++) {
//         testUsers.push({
//             nombre:nombres[Math.floor(Math.random()*nombres.length)],
//             apellido: apellidos[Math.floor(Math.random()*apellidos.length)],
//             color: colores[Math.floor(Math.random()*colores.length)]
//         })
//     }
//     res.send(testUsers);
// });


faker.locale = 'es';
const {name, internet} = faker; //destructuring

app.get('/test', async (req, res) => {
    let testUsers = [];
    for (let i=0; i<100;i++) {
        testUsers.push({
            nombre:name.firstName(),
            apellido: name.lastName(),
            email: internet.email()
        })
    }
    res.send(testUsers);
});