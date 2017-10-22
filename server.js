import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './api/routes/studentRoute'; // importing routes

// Create/ Set-up an express app
const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// local db eg 'mongodb://127.0.0.1/my_database'
mongoose.connect('mongodb://demola:demola2@ds119355.mlab.com:19355/school-info-db', {
  useMongoClient: true
});

// Parse body of incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
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
