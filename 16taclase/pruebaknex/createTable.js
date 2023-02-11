import options from './options/mysql.js';
import knex from 'knex'; //Sistema basado en promesas o callbacks. En este caso usamos callbacks.

const database = knex(options);
database.schema.createTable('cars', table=>{ //database tiene su propio objeto schema para hacer referencia a operaciones no operacionales (estructuras de talas, de bases....etc)
    //table.primary('id'); para crear primary = clave primaria.
    table.increments('id'); //id AUTO_INCREMENT
    table.string('brand', 30); //brand VARCHAR(30) //knex permite declararlo como string en vez de varchar
    table.integer('price');    //price INT
}).then(()=>console.log("table created")).catch(err=>console.log(err))
.finally(()=>database.destroy()); //desconectar o destruir la sesion actual con la base de datos, sino este programa no termina
//y hay que terminarlo manualmente por consola con ctrl c.
