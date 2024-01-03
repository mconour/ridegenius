const express = require('express');
const app = express();
const port = 3000;

// Import the cors library
const cors = require('cors');

// Allow requests from all origins (for development, you can configure this to a specific origin)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
