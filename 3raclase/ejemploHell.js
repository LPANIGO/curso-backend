
//callback hell: anidamiento
const copiarArchivos = (ruta, callback) =>{ //por que se relaciona el callback de esta linea al (error,archivo) de la siguiente linea?
    buscarArchivo(ruta,(error,archivo)=>{
        if(error) {
            callback(error);
        }else{
            leerArchivo(ruta,'utf-8',(error,texto) => {
                if(error) {
                    callback(error);
                }else {
                    EscribirArchivo(nuevaRuta,texto,(error,resultado) => {
                        if(error) {
                            callback(error);
                        }else {
                            callback(null,resultado);
                        }
                    });
                }
            }
            );
        }
    })
}

//logica del hell
const buscarArchivo = (ruta,callback) => {
    //buscar archivo en la ruta
    
    //operacion
    
    //el archivo no existio
    callback('el archivo no existe')

    //el archivo si existio
    //me posiciono en el archivo
    callback(null,archivo)

}