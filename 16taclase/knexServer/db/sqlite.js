//es una base de datos pero interna o embebida. No requiere una conexion extra al servidor o gestor de bd.

import knex from 'knex';

const mysqloptions = {
    client:'mysql',
    connection: {
        host:'127.0.0.1',
        user: 'root',
        password:'',
        database:'base_knex'
    }
}

const sqliteOptions = {
    client:"sqlite3", //ejecuto antes "npm install sqlite3"
    connection: {
        filename:'./sqliteDatabase.sqlite'
    },
    useNullAsDefault: true //e caso de haber campor vacios los rellena.
}

let db = knex(sqliteOptions);

try {
    let exists = await db.schema.hasTable('pets');
    if(exists) {
        await db('pets').del();
    }
    else {
        await db.schema.createTable('pets', table=>{
            table.primary('id');
            table.increments('id');
            table.string('name',30).nullable(false); //NOT NULL
            table.string('specie',20);
            table.integer('age');
        })
    }
} catch(error) {
    console.log(error);
}

export default db;