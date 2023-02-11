//const empresa = require ('./empresa.json');
import empresa from './empresa.json' assert {type:"json"}; //o leer con 'fs'
import {normalize, schema, denormalize} from 'normalizr';
//console.log(empresa);

//entities
const empleado =  new schema.Entity('employees');
const company = new schema.Entity('empresas', {
    gerente:empleado,
    encargado:empleado,
    empleados:[empleado]
});

const normalizeData = normalize(empresa,company);

//console.log(JSON.stringify(normalizeData,null,'\t'));


const denormalizeData = denormalize(normalizeData.result, company, normalizeData.entities);

console.log(JSON.stringify(denormaliexitzeData,null,'\t'));