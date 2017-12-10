require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import initializeRoutes from './app/routes';
import { connect } from './app/database';

connect()
.then(() => { console.log("Mongo db connection estabilshed")});

const methodOverride = require ('method-override');
const app = express();

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

// Serve CSS and JavaScript files in a directory named assets (css/js)
app.use('/css',express.static(path.join(__dirname, 'assets/css')));
app.use('/js',express.static(path.join(__dirname, 'assets/js')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

initializeRoutes(app);

app.listen(process.env.PORT, () => {
       console.log(`Listening on port ${process.env.PORT}`);
});
