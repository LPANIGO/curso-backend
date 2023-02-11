import multer from 'multer';
/* Multer es un middleware que me va a permitir recibir archivos en el servidor y almacenarlos. */
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/img");
    },
    filename: function(req,file,cb) {
        cb(null, Date.now()+"-"+file.originalname);
    }
})

const uploader = multer({storage:storage}); //quien se encarga de cargar el archivo.

export default uploader;



const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)
