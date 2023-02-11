class Contador {

    constructor(responsable) { //LO PRIMERO QUE SE EJECUTA AL CREAR UN OBJETO NUEVO
        this.responsable=responsable;
        this.contador=0;
    }

    static contadorGlobal = 0;

    obtenerResponsable = function () {
        return this.responsable;
    }
    obtenerCuentaIndividual = function()  {
        return this.contador;
    };
    obtenerCuentaGlobal = function()  {
        return Contador.contadorGlobal;
    }
    contar = function() {
        this.contador++;
        Contador.contadorGlobal++;
    }
}



let contador1 = new Contador("Licenciado Rodriguez"); //Una instancia
let contador2 = new Contador("Ramirez Juan");
console.log(contador1.obtenerResponsable());

contador2.contar();
contador1.contar();
contador1.contar();
contador1.contar();


console.log(`Cuenta global: ${contador1.obtenerCuentaGlobal()}`);
console.log(`Contador individual contador 1: ${contador1.obtenerCuentaIndividual()} `);




//-------------------------------------------------------------------------------
/*
let contador = {  //esto no es reutilizable a diferencia de una clase
    nombre: "Leandro",
    apellido: "Panigo",
    estudiar: function(){
        console.log('escribir codigo')
    }
}
*/