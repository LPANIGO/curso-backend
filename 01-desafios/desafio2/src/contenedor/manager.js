
const fs = require('fs');

class Contenedor {
    //NO TODAS LAS CLASES NECESITAN UN CONSTRUCTOR.
    constructor(path) {
        this.path = path;
    }

    getAll = async() => {
        try {
            if(fs.existsSync(this.path)) {   //comprueba que exista el archivo.
                const fileData = await fs.promises.readFile(this.path, 'utf-8');
                let productos = JSON.parse(fileData);
                return productos;
            } else {
                return []; //escondemos al usuario que el archivo no existe con un arreglo vacio; significa que no hay productos.
            }
        } catch(error) {
            console.log("No se puede leer: " + error);
        }
    }

    save = async(object) => {
        try {
            let productos = await this.getAll();
            let lastID;
            if(productos.length === 0) {
                object.id = 1;
                productos.push(object);
                await fs.promises.writeFile(this.path, JSON.stringify(productos, null, '\t'));
                
                lastID = object.id;
            } else {
                object.id = productos[productos.length-1].id+1;  //accedo a la ultima mascota que se agregó y le sumo 1 para tener el siguiente id
                productos.push(object);     //podria intentar append en esta parte en vez de write
                await fs.promises.writeFile(this.path, JSON.stringify(productos, null, '\t'));
                
                lastID = object.id;
            }
            return lastID;
        } catch(error) {
            console.log(`No se puede leer el archivo... ${error}`);
        }
        
    }

    getById = async(idNumber) => {
        try {
            let productos = await this.getAll();
            let objeto = null;
            if (productos.length > 0) {
                for (let producto of productos) {
                    if (idNumber === producto.id) {
                        objeto = producto;
                    }
                }
            }
            return objeto;
        } catch(error) {
            console.log("No se puede eliminar: " + error);
        }

        
        
    }

    deleteById = async(idNumber) => {
        try {
            const productos = await this.getAll();
            const deltById = producto => producto.id != idNumber;
            const productosActualizado = productos.filter(deltById);
            await fs.promises.writeFile(this.path, JSON.stringify(productosActualizado, null, '\t'));
        } catch(error) {
            console.log("No se puede eliminar: " + error);
        }
    }

    deleteAll = async() => {
        try {
            let productos = [];
            await fs.promises.writeFile(this.path, JSON.stringify(productos, null, '\t'));
        } catch(error) {
            console.log("No se puede eliminar: " + error);
        }
    }
}

module.exports = Contenedor;
