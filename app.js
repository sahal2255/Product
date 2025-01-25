const express = require('express');
const cors = require('cors');
const dbConnect = require('./middlewares/dbConnect');
const productRoute = require('./router/productRoute'); // Assuming this exports a router instance
require('dotenv').config();

const app = express();

// Middleware for CORS
app.use(
  cors({
    origin: process.env.BASE_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST'],
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', productRoute); // Use the route under a proper base path

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

// Start the server and connect to the database
const PORT = process.env.PORT || 3005;
app.listen(PORT, async () => {
  try {
    await dbConnect();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
});