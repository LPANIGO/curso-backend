const fs = require('fs');

let process = async() => {
    try {
        let content = await fs.promises.readFile('package.json', 'utf-8');
        let objeto = JSON.parse(content);
        objeto.name = '4taclase';
        console.log(objeto);
        objeto.name = "papa";
        await fs.promises.writeFile('package.json', JSON.stringify(objeto,null,'\t'));
        //para agregar un objeto como elemnto de un arreglo
        //await fs.promises.writeFile('package.json', JSON.stringify([objeto],null,'\t')); 
    } catch(err) {
        console.log(err);
    }
}

process();