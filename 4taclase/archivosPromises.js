//npm init -y  crea un package.jason
let fs = require('fs');

const process =  async() => {
    try {
        fs.promises.writeFile('archivoPromesas.txt', 'Hola desde promises'); //con promises automaticamente funciona con el async await
        let content = await fs.promises.readFile('archivoPromesas.txt', 'utf-8'); //awaite para que espere a writeFile()
        console.log(content);
    } catch(err) {
        console.log(err);
    }
}

process();