import mongoose from 'mongoose';
import petService from './Pets.js';

const collection = 'Users';
const schema =  new mongoose.Schema({
    name:String,
    email:String,
    pets:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:'Pets'
        }
    ],
    books:[
        {
            book:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Books'
            },
            quantity:Number
        }
    ]
})

const userService = mongoose.model(collection,schema);
export default userService;