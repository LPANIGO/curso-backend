import express from "express";
import config from "./config/config.js";

//console.log(process.env.PORT); solo ejecutando desde run a debug se lee el valor de PORT establecido en .vscode > launch.json

const app =express();
const PORT = process.env.PORT||3000; //por default en productivo se usa 3000
config.mongo.MONGO_URL;
console.log(config.app); //ver package.json
app.listen(config.app.PORT, () => console.log('Listening on port', config.app.PORT))