/*Funciones */
function suma (a, b ) {
    return a+b;
}

let resultado = suma(2,3);

const restar = (a,b) => {   //arrow func
    return a-b;
}
const resta = (a,b) => a-b;  //arrow func abreviada, con una sola instruccion
const elevarAlCuadrado = base => base**2;    //arrow con un solo parametro y una sola instruccion

//RETURN IMPLICITO:
const promediar = (a,b) => (a+b)/2
const p = promediar(10,6)
console.log(promediar)


class Cliente {
    constructor(name){
        this.name = name;
    }

    quejarse = () => {
        return 'Texto';
    }
}
