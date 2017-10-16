import express from 'express';

// create/ set-up an express app
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //res.send("Welcome to my app");
  res.sendFile(`${__dirname}/index.html`)
  console.log('worked');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})