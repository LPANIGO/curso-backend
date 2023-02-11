//UNA PROMESA ES ASINCRONA
// Tres estados de la promesa: pending, fulfilled, rejected. No se puede controlar el tiempo que tarda en resolverse.

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0 ) {
            reject('No se puede dividir por 0.');
        } else {
            resolve(dividendo/divisor); //resolve funciona como return
        }
    })
}

//-------------------------------------------------------------------//

//.then cuando queremos obtener el resultado de la promesa que si se cumplio
//.catch cuando queremos atrapar el error por el cual NO se resolvio la promesa

dividir(2,0)
.then( result => {return  result+1} ) //"result" es el "RESOLVE" de la funcion anonima dividir
.then( result => {                    //si necesito concatenar operciones sobre un resultado solo utilizo otro .then
    if (result < 5) {
    throw new Error("El numero es muy bajo"); //es una forma de salirse del codigo diciendo que hubo un error.
    } else {
        console.log(`Primera division: ${result}`);
    }
} )
.catch( error => console.log(error) );  //con un solo catch puedo atrapar CUALQUIER cosa que salga mal en el proceso de resolución de la Promesa.

//-------------------------------------------------------------------//

//armo mi promesa por fuera, pero la utilizo en un entorno asincrono como el siguiente:
const proceso = async() => {     //TODO el codigo aqui dentro se trata de forma asincrona.   
    try {  //esto emula el .then y .catch
        let resultado = await dividir(10,4); //await permite ESPERAR a la promesa como si fuese una funcion mas.
        let resultado2 = resultado + 1;
        console.log(`Segunda division con \"try\": ${resultado2}`);
    } catch(error) {
        console.log(error);
    }
}
proceso();


//---------------------------------------------------------------------//

console.log(        //console.log lee de forma sincrona, instantanea.
    dividir(10,2)
.then( result => {return  result+1} ) 
.then( result => {                    
    if (result < 5) {
    throw new Error("El numero es muy bajo");
    } else {
        console.log(`Tercera division: ${result}`);
    }
} )
.catch( error => console.log(error) )
)
