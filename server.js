/* eslint-disable no-console */
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import routes from './api/routes/studentRoute'; // importing routes

// load .env file
dotenv.load();

// Create/ Set-up an express app
const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// local db eg 'mongodb://127.0.0.1/my_database''mongodb://demola:demola2@ds119355.mlab.com:19355/school-info-db'
mongoose.connect('mongodb://127.0.0.1/school-info-system', {
  useMongoClient: true
});

// Log requests to the console
app.use(logger('dev'));

// Parse body of incoming requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes go here
// simple test route
app.get('/', (req, res) => {
  res.send('Welcome to my app');
  // res.sendFile(`${__dirname}/index.html`);
  console.log('Working as expected!');
});

// imported routes registered here
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server listening to requests on port ${port}...`);
});

export default app;
