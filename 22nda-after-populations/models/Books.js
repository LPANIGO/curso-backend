import mongoose from 'mongoose';

const collection = 'Books';
const schema =  new mongoose.Schema({
    title:String,
    author:String
})

const bookService = mongoose.model(collection,schema);
export default bookService;