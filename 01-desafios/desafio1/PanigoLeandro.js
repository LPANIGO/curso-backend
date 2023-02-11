class Usuario {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.books = [];
        this.pets = [];
    }

    getFullName() {
        return `\n\tNombre de usuario: ${this.name} ${this.surname}`
    }

    addMascota(pet) {
        this.pets.push(pet)
    }

    countMascotas() {
        return `\n\tCantidad de mascotas: ${this.pets.length}` 
    }

    addBook(bookName, author) {
        let book = {
            bookName: bookName,
            author: author
        }
        this.books.push(book)
    }

    getBookNames() {
        let newArray = []

        for (let book of this.books) {
            newArray.push(book.bookName)
        }
        return newArray
    }
}

const recorrerArray = (arr) => arr.map(item=>`\n\t* ${item}`) //util function


/* INFO USUARIO */
const Alvaro =  new Usuario('Alvaro', 'Rodriguez')
console.log(Alvaro.getFullName());

/* MASCOTAS */
Alvaro.addMascota('Snoopy Perro')
Alvaro.addMascota('Lucifer Gato')
Alvaro.addMascota('Jack Loro')
console.log(Alvaro.countMascotas());


/* LIBROS */
Alvaro.addBook('Final del juego', 'Julio Cortazar')
Alvaro.addBook('El Aleph', 'Jorge Luis Borges')
let listaLibros = Alvaro.getBookNames() 

if (listaLibros.length >= 1) {
    console.log(`\n\tListado de libros de ${Alvaro.name}: ${recorrerArray(listaLibros)}`)
}
else {
    console.log(`\n\tBiblioteca de ${Alvaro.name} vacia \n`)
}