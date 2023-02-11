
class Cliente {
    constructor(name, last_name, age, email) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.email = email;
        this.pets = [];
    }

    sayHi = () => {
        console.log(`Hola soy el cliente ${this.name} ${this.last_name} `)
    }
    
    addPet = (pet)=>{
        this.pets.push(pet)
        console.log(`Mis mascotas son: ${this.pets}`)
    }
}

let cliente1 = new Cliente("Rumperto", "Rumipanto", 27, "rr1995@gmail.com");
let cliente2 = new Cliente("Denis", "Dionisiano", 22, "dd2000@gmail.com");

cliente1.sayHi();
cliente2.sayHi();

cliente1.addPet("Draco");
cliente2.addPet("Simba");
cliente2.addPet("Timon");