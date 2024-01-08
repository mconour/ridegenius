const express = require('express');
const app = express();
const port = 3000;

// Import cors library
const cors = require('cors');

// Allow requests from all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static('public'));

// Import MongoDB connection
const db = require('./db'); 

// Import User model 
const User = require('./models/user'); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Test route to check MongoDB connection
app.get('/test-db', async (req, res) => {
  try {
    const sampleUser = await User.findOne({}); 
    if (sampleUser) {
      res.json({ message: 'MongoDB connected successfully!' });
    } else {
      res.json({ message: 'MongoDB is connected, but no data found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error connecting to MongoDB' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});