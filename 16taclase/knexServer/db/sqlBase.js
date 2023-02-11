import knex from 'knex';

//En pruebaKnex teniamos las opciones (CONFIGURACION) aparte y luego inicializabamos la base de datos. 
//En este caso está todo junto.
let db = knex({
    client:'mysql',
    connection: {
        host:'127.0.0.1',
        user: 'root',
        password:'',
        database:'base_knex'
    }
})
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