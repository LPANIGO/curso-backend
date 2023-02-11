import mongoose from 'mongoose';

const collection = "Users";

const usersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userSerice = mongoose.model(collection,usersSchema);
export default userSerice;