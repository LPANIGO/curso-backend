import express  from "express";
import usersRouter from './routes/users.router.js';

const app = express();
const server = app.listen(8080,console.log(" Listening Mock :)"));

app.use('/users', usersRouter);