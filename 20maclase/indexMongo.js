import mongoose from "mongoose";

mongoose.connect('mongodb+srv://leopanigo:Mongo2.0@clusterdeprueba.ozm98v9.mongodb.net/testatlas?retryWrites=true&w=majority', err => {
    if(err) console.log(err);
    else console.log("Base conectada a atlas.")
});

