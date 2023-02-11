import admin from 'firebase-admin';
import firebaseConfig from './pruebadefirebase.json' assert {type:"json"}; //import assert es algo experimental, no esta estandarizado.


//si no funciona el import del json por la version vieja de node:
//import fs from 'fs';
// const enviroment = async() => {
//     let data = await fs.promises.readFile('./pruebadefirebase.json');
//     const firebaseConfig = JSON.parse(data);
//     admin.initializeApp({
//     credential: admin.credential.cert(firebaseConfig),
//     })
//     console.log(firebaseConfig);
// }
//environment();


//inicializacion de config
admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: 'https://pruebadefirebase-df044.firebaseio.com' //armo la url con el nombre del proyecto
})

//console.log(firebaseConfig);

const environment = async () => {
    const database = admin.firestore();
    const query = database.collection('usuarios');
        //create
    //let doc = query.doc();
    //await doc.create({nombre:"Francisco",dni:35689412});
        //Read
    /*
    try {
        const snapShot = await query.get();
        //console.log(snapShot);
        let docs = snapShot.docs;
        //console.log(docs);
        const response = docs.map(doc=>({
            id:doc.id,
            name:doc.data().nombre,
            dni:doc.data().dni
        })) //pone el callback entre parentesis para que sea directamente un return.
        console.log(response);
    } catch(err) {
        console.log(err);
    }
    */
        //Get by id
    // let id ="x8IwDgKPNZvQjrP6XZvu"
    // const doc = query.doc(id);
    // const item = await doc.get();
    // const obj = item.data() 
    // console.log(obj);
        //update
    // let id ="x8IwDgKPNZvQjrP6XZvu";
    // const doc = query.doc(id);
    // let item = await doc.update({dni:22222222})
    // console.log(item);
        //delete
    let id ="x8IwDgKPNZvQjrP6XZvu";
    const doc = query.doc(id);
    let result = await doc.delete()
}
environment();
