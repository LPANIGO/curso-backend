import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/session.router.js';
import mongoose from 'mongoose';

const app = express();

const connection = mongoose.connect('mongodb+srv://leopanigo:Mongo2.0@clusterdeprueba.ozm98v9.mongodb.net/testRegister?retryWrites=true&w=majority')
app.use(express.json())
app.use(express.static(__dirname+'/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars')
app.use('/', viewsRouter);
app.use('/api/sessions',sessionsRouter);

const server = app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});