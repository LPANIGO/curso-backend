const options = {
    client:'mysql',
    connection:{
        host:'127.0.0.1',//Es el numero que representa localhost. En la nuve no sirve local host, 
        //asi que debo tener deployed mi base de datos en un servidor para que funcione o tenerlo en sqlite.
        user:'root', //Estamos trabajando con un sistema gestor de bbdd, el cual trabaja con usuarios, permisos, 
        //multiples bases, conexiones adicionales, etc. El usuario por defecto es "root".
        //Por eso en la clase anterior ejecutamos por cmd "mysql -u root".
        password:'',
        database:'base_knex' //Indico el nombre de la bd. Equivale a "USE baseconqueso" de la clase pasada.
    }
}
export default options;