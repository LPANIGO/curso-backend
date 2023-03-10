import mongoose from "mongoose";
import MongoDBContainer from "./MongoDBContainer.js";

const collection = 'products'
const productsSchema = mongoose.Schema({
    name:String,
    price:Number
})

export default class Products extends MongoDBContainer{
    constructor() {
        super(collection,productsSchema);
    }
}