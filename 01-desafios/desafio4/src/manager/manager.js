import fs from 'fs';


class Manager {
    constructor(path) {
        this.path = path;
    }

    getAll = () => {
        try {
            if (fs.existsSync(this.path)) {
                const fileData =  fs.readFileSync(this.path, 'utf-8');
                let productos = JSON.parse(fileData);
                return productos;
            } else {
                console.log("no hay archivo");
                return [];
            }
        } catch (error) {
            console.log("No se puede leer: " + error);
        }
    }

    add = (object) => {
        try {
            let products = this.getAll();
            if (products.length === 0) {
                object.id = 1;
                products.push(object);
                fs.writeFileSync(this.path, JSON.stringify(products, null, '\t'));
            } else {
                //object.id = products[products.length-1].id+1;
                let products = this.getAll();
                object.id = products[products.length-1].id + 1;
                console.log(object);
                products.push(object);
                fs.writeFileSync(this.path, JSON.stringify(products, null, '\t'));
            }
            return object;
        } catch (error) {
            console.log(`No se pudo guardar el producto... ${error}`);
        }
    }

    getById = (productId) => {
        try {
            let products = this.getAll();
            let product = {};
            for(let p of products) {
                if(productId === p.id) {
                    product = JSON.stringify(p);
                }
            }
            return product;
        } catch(error) {
            console.log("No se pudo encontrar el producto: " + error)
        }
    }

    update = (id, object) => {
        try {
            object.id = id;
            let products = this.getAll();
            products.forEach(element => {
                if(element.id === id) {
                    element.title = object.title;
                    element.price = object.price;
                    element.thumbnail = object.thumbnail;
                }
            })
            fs.writeFileSync(this.path, JSON.stringify(products, null, '\t'));
            return object;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    deleteById = (id) => {
        try {
            let products = this.getAll();
            let newArray = products.filter(element => element.id !== id);
            fs.writeFileSync(this.path, JSON.stringify(newArray, null, '\t'))
            return newArray;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}

export default Manager;