import holding from './holding.json' assert {type:'json'};
import {normalize, schema, denormalize} from 'normalizr';

const empleados = new schema.Entity('empleados');
const company = new schema.Entity('empresas', {
    gerente: empleados,
    encargado: empleados,
    empleados: [empleados]
})
const holdingSchema =  new schema.Entity('holdings', {
    empresas: [company]
})

const normalizedData = normalize(holding, holdingSchema);

//console.log(JSON.stringify(normalizedData,null,'\t'));

const denormalizedData = denormalize(normalizedData.result, holdingSchema, normalizedData.entities)

console.log(JSON.stringify(denormalizedData,null,'\t'));
