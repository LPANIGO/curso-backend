import fs from 'fs';
import __dirname from '../utils.js';

export default class PetManager {
    constructor() {
        this.path = __dirname + '/files/pets.json';
    }

    getAll = async() => {
        try {
            if (fs.existsSync(this.path)) {
                console.log("Hay archivo");
                const fileData =  await fs.promises.readFile(this.path, 'utf-8');
                let pets = JSON.parse(fileData);
                return pets;
            } else {
                console.log("no hay archivo");
                return [];
            }
        } catch (error) {
            console.log("No se puede leer: " + error);
        }
    }

    add = async(object) => {
        try {
            let pets = await this.getAll();
            if (pets.length === 0) {
                //object.id = 1;
                pets.push(object);
                await fs.promises.writeFile(this.path, JSON.stringify(pets, null, '\t'));
            } else {
                //object.id = pets[pets.length-1].id+1;
                pets.push(object);
                await fs.promises.writeFile(this.path, JSON.stringify(pets, null, '\t'));
            }
            return object;
        } catch (error) {
            console.log(`No se pudo guardar la mascota... ${error}`);
        }
    }
}

/*
import fs from 'fs';
import __dirname from '../utils.js';

export default class PetManager {
    constructor(){
        this.path = __dirname+'/files/pets.json';
    }
    
    getAll = async() =>{
        if(fs.existsSync(this.path)){
            let result = await fs.promises.readFile(this.path,'utf-8');
            return JSON.parse(result);
        }else{
            return []
        }
    }
    createPet = async(pet) =>{
        let pets = await this.getAll();if(pets.length===0){pet.id=1;pet.isAdopted = false;pets.push(pet);await fs.promises.writeFile(this.path,JSON.stringify(pets,null,'\t'));}else{pet.id = pets[pets.length-1].id+1;pet.isAdopted = false;pets.push(pet);await fs.promises.writeFile(this.path,JSON.stringify(pets,null,'\t'));}}}
*/