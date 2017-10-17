import express from 'express';
import bodyParser from 'body-parser';
// create/ set-up an express app
const app = express();
const port = 3000;

// Parse body of incoming requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  //res.send("Welcome to my app");
  res.sendFile(`${__dirname}/index.html`);
  console.log('Working as expected!');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})