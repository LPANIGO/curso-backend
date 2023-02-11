/*
closure o scope
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can't get at the data from an outside scope except through the object's privileged methods.
Every function in JavaScript is a closure over at least one context: The global context
*/

let a="A" //scope global

function sayALetter(){
    // console.log(a);
    let a = "El Leo"//scope local
    let b = "Aylen"
    console.log(a);
}
sayALetter();

// -----------------------


const persona = {
    nombre: 'Damian'
}
persona.apellido = 'Rodriguez'
console.log(persona)