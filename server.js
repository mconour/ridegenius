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

// Import the MongoDB connection
const db = require('./db'); // Adjust the path as needed to import your db.js file.

// Import your User model (replace 'User' with your actual model name)
const User = require('./models/user'); // Adjust the path as needed.

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Test route to check MongoDB connection
app.get('/test-db', async (req, res) => {
  try {
    const sampleUser = await User.findOne({}); // Replace 'User' with your actual model for users.
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
