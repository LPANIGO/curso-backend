import mongoose from "mongoose";
import bookService from "./models/Books.js";
import petService from "./models/Pets.js";
import userService from "./models/User.js";

const connection = mongoose.connect('mongodb+srv://leopanigo:Mongo2.0@clusterdeprueba.ozm98v9.mongodb.net/afterPopulations?retryWrites=true&w=majority');

const envirnoment = async() => {
    //Create
    // const result = await userService.insertMany([
    //     {name:"Sebastian",email:"sebastian@gmail.com", pets:[]},
    //     {name:"Diego",email:"dieguito@gmail.com", pets:[]}
    // ])
    // const resultPets = await petService.insertMany([
    //     {name:"Patas",species:"Perro"},
    //     {name:"Orejas",species:"Conejo"}
    // ])
    // console.log("Users:", result);
    // console.log('Pets:', resultPets);

    //Adopción
    let user = await userService.findById("637c077d4fbf98b4cdfdb2cf").populate('pets').populate('books.book'); //populate en nombre de la propiedad, y NO el nombre de la colllection
    // let pet = await petService.findById("637c077e4fbf98b4cdfdb2d3").populate('owner');
    
    
    //Update user
    // user.pets.push(pet._id);
    //await userService.updateOne({_id:user._id},{$set:user});
    //Update pet
    // pet.adopted=true;
    // pet.owner=user._id;
    // await petService.updateOne({_id:pet._id},{$set:pet});

    //user.books.push({book:'637c27f1097a9353629c5273',quantity:1}); //antes de insertar el libro deberia haber preguntado si ya existia en este usuario, y modificar quantity.
    //await userService.updateOne({_id:user._id},{$set:user});
    console.log("User:", JSON.stringify(user, null, '\t'));
    //console.log('Pet:', pet);


    //let result = await bookService.create({title:"Libro genial",author:"El mejor autor"});
    //console.log(result);


    mongoose.disconnect();
}

envirnoment();