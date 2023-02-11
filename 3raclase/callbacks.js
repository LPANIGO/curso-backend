
const button = document.getElementById('botonCallback');
const decirAdios = () => console.log('Adios');
button.addEventListener('click',decirAdios);


const multiplicarPor2 = num => num*2;

// const miPropioMap = (array,functionCallBack) => {

// }
console.log([2,3,5].map(multiplicarPor2));

//si presiono ctrl y hago click en un elemento js veo sus funciones y atributos.

//-----------------------------------------------------------------------------------

const sumar = (num1,num2) => num1+num2;
const restar = (num1,num2) => num1+=-num2;

const operacion = (num1,num2,operador) => {  //CALLBACK
    return operador(num1,num2);
}

operacion(10,50,sumar)

/*Convensiones callbak:
*suele ser el ultimo parametro
*suele recibir dos parametros
*func llama un cb al terminar de ejecutar todas sus operaciones
*/


//Esto emula el try catch:
const ejemploCallback = (error, resultado) => {
    if (error) {
        //advertencia error
    } else {
        //retornar un resultado
    }
}