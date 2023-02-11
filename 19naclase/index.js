import mongoose from "mongoose";
import usersService from "./src/models/Users.js";

//Escabilidad horizontal: cuando conectamos a una base de datos nosql el servidor se queda en standBy para las siguientes consultas

mongoose.connect('mongodb://127.0.0.1:27017/school', err =>{
    if(err){
        console.log("x_X");
    }
    else {
        console.log("Connected to database :)");
    }
});
//mongoose es async, todo proceso de db debe se asincrono
const process = async () => {
    /*READ */
    // let users = await usersService.find();
    // console.log(users);
    /*CREATE*/
    // let newStudent = {
    //     first_name:"Diego",
    //     last_name:"Courel",
    //     age:"42",
    //     email:"Ddiego@correo.com"

    // }
    // let result = await usersService.create(newStudent); //no existe en mongoose "insertOne" sino "create".
    // console.log(result);
    /*Bulk insert */
    let students = [
        { first_name: 'Pedro', last_name: 'Mei', age: 21, dni: '31155898', course: '1A', grade: 7 },
        { first_name: 'Ana', last_name: 'Gonzalez', age: 32, dni: '27651878', course: '1A', grade: 8 },
        { first_name: 'José', last_name: 'Picos', age: 29, dni: '34554398', course: '2A', grade: 6 },
        { first_name: 'Lucas', last_name: 'Blanco', age: 22, dni: '30355874', course: '3A', grade: 10 },
        { first_name: 'María', last_name: 'García', age: 36, dni: '29575148', course: '1A', grade: 9 },
        { first_name: 'Federico', last_name: 'Perez', age: 41, dni: '320118321', course: '2A', grade: 5 },
        { first_name: 'Tomas', last_name: 'Sierra', age: 19, dni: '38654790', course: '2B', grade: 4 },
        { first_name: 'Carlos', last_name: 'Fernández', age: 33, dni: '26935670', course: '3B', grade: 2 },
        { first_name: 'Fabio', last_name: 'Pieres', age: 39, dni: '4315388', course: '1B', grade: 9 },
        { first_name: 'Daniel', last_name: 'Gallo', age: 25, dni: '37923460', course: '3B', grade: 2 }
    ]
    let result = await usersService.insertMany(students);
    console.log(result);
    mongoose.disconnect(); //para cerrar el proceso como con next(). En mi servidor SI se debe quedar CONECTADO.
}
process();