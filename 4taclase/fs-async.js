const fs = require('fs');
/*fs con callbacks */

//al ser aync pude pasar que se lea antes de que se termine de escribi el archivo,
//asi devuelve vacio.
fs.writeFile('pruebacallback.txt', 'Hola desde callback', (error) => {
    if (error) {
        console.log('Hubo un error.');
    } else {
        console.log("Todo correcto, archivo escrito.");
    }
})

fs.readFile('pruebacallback.txt', 'utf-8', (error, resultado) => {
    if (error) {
        console.log('Hubo un error al leer el archivos.');
    } else {
        console.log(resultado);
    }
})

fs.appendFile('pruebacallback.txt', ' Prueba de append async', (error) => {
    if (error) {
        console.log('No se puedo hacer el append.');
    } else {
        console.log("");
    }
})