import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import Student from './api/models/studentModel'; // created model loading here
import routes from './api/routes/studentRoute'; // importing route

// Create/ Set-up an express app
const app = express();
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://demola:demola2@ds119355.mlab.com:19355/school-info-db');

// Parse body of incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes go here
// test route
app.get('/', (req, res) => {
  res.send('Welcome to my app');
  // res.sendFile(`${__dirname}/index.html`);
  console.log('Working as expected!');
});

// imported routes registered here
routes(app);

app.listen(port, () => {
  console.log(`Server Listening on port ${port}...`);
});
