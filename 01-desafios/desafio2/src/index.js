const Contenedor = require ('./contenedor/manager.js')
const Bike = require('./contenedor/bike.js');

const bikeService = new Contenedor("src/files/productos.json");

//esto nos va a servir para trbajar en un entorno asincrono y no perdernos entre promesas.
const environment = async() => {

    /*OBTENER PRODUCTOS*/
    console.log("\nObeteniendo productos...");
    let productos = await bikeService.getAll(); //await espera por todo el metodo
    console.log(productos);
    

    /*AGREGAR PRODUCTO Y OBTENER ID DEL ULTIMO ELEMENTO*/
    console.log("Agregando productos:\n");
    let producto1 = new Bike('Zanella','$200000','imagen');
    let lastID = await bikeService.save(producto1);
    console.log('El ultimo id del arreglo productos es: ' + lastID);


    /*BUSCAR PRODUCTO POR ID*/
    console.log("\nBuscando producto con id 1:")
    console.log(await bikeService.getById(1));

    /*ELIMINAR PRODUCTO POR ID*/
    // await bikeService.deleteById(1);
    // console.log('Arreglo actualizado despues de borrar id 1' + await bikeService.getAll());

    /*ELIMINAR TODOS*/
    // await bikeService.deleteAll();
    
}

environment();
