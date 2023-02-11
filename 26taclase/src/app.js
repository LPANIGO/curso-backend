import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/session.router.js';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import initializePassport from './config/passport.config.js';
import passport from 'passport';

const app = express();

const connection = mongoose.connect('mongodb+srv://leopanigo:Mongo2.0@clusterdeprueba.ozm98v9.mongodb.net/authorization?retryWrites=true&w=majority')
app.use(express.json())
app.use(express.static(__dirname+'/public'));
app.use(session({
    secret:'secretCode',
    store:MongoStore.create({
        mongoUrl:"mongodb+srv://leopanigo:Mongo2.0@clusterdeprueba.ozm98v9.mongodb.net/authorization?retryWrites=true&w=majority",
        ttl:3600,
    }),
    resave:false,
    saveUninitialized:false
}));

initializePassport(); //inicializacion de mis cosas
app.use(passport.initialize()); //inicializacion motor de passport
app.use(passport.session());

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars')
app.use('/', viewsRouter);
app.use('/api/sessions',sessionsRouter);

const server = app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});