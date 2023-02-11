import mongoose from "mongoose";

const collection = 'users';

const usersSchema = mongoose.Schema({
    first_name:{
        type:String,
        max:40
    },
    last_name:{
        type:String,
        required:true,
        max:50
    },
    role: {
        type:String,
        default:"student"
    },
    age:Number,
    active:Boolean,
    email:{
        type:String,
        //required:true
        default:'correo@correoso.com'
    },
    course:String,
    grade:Number,
    dni:String,
},{timestamps:true}) //timestamp genera fyh de creacion y modificacion de cada documento.

const usersService = mongoose.model(collection,usersSchema);

export default usersService;

