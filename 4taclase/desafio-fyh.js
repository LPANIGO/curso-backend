const fs = require('fs');
try {
    fs.writeFileSync('fyh.txt', new Date().toLocaleString()); //convierte en string el objeto Date
} catch(error) {
    console.log(error);
}

try {
    let content = fs.readFileSync('fyh.txt', 'utf-8');
    console.log(content);
} catch(error) {
    console.log(error);
}
