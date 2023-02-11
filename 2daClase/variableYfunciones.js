let arreglo1 = [5,6,8]
let arreglo2 = arreglo1 //no copia los valores, sino que es un puntero de la misma zona de memoria
let arreglo3 = arreglo2

arreglo1[2] = '59'
console.log(`arreglo1: ${arreglo1} arreglo2: ${arreglo2} arreglo3: ${arreglo3}`) //mismos sectores de memoria

let a = 1
let b = a

b = 'Desk'

console.log(`a: ${a}, b: ${b}`) //diferentes sectores de memoria


/*para generar una copia de un arreglo */

let arreglo4 = [...arreglo1]  //spread operator
let arreglo5 = arreglo1.map(function(num){return num}); //copia de arreglo1
arreglo1[0] = 20 //modifico arreglo1
console.log(`arreglo1: ${arreglo1}, arreglo4: ${arreglo4}`)
console.log(`arreglo1: ${arreglo1}, arreglo5: ${arreglo5}`)



/*funciones */
function sayGoNuts(name) {
    console.log('Go nuts' + name)
}
/*funciones anonimas*/

const sayGoNuts2 = function (name) {
    console.log('Go nuts' + name)
}

function foo() { return function() {let = 'do smth'} }

(function() {var foo = ''; }) ()



/*      IIFE: 

se autoejecutan tan pronto como se definen. 
Antes las variables eran globales incluso dentro de un 
bloque de {}, con esto dicho; estas funciones se ejecutan cuando 
se tienen que ejecutar y luego mueren o se destruye dejando libre los espacios de sus variables
para poder usar esos nombres de variables en otra parte del codigo.

(function() {
    console.log('Funcion IIFE' )
    var a = 2
})();

*/