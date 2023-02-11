const sumar = (num1, num2) => {
    if (!num1 || !num2) return "Valor nulo";
    if (isNaN(num1) || isNaN(num2)) return "No es un número"; //si los valores son string no salta este error, y encima se concatena los dos valores en vez de sumar.
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    //if(typeof num1 != "number" || typeof num2 != "number") return null;
    return num1 + num2;
}

console.log(sumar("1","2"));

let string = "Estoesunstring"
let result =  string.indexOf('.');
console.log(result);
