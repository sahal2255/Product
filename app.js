const express = require('express');
const cors = require('cors');
const dbConnect = require('./middlewares/dbConnect');
const productRoute = require('./router/productRoute'); // Assuming this exports a router instance
require('dotenv').config();

// Function to initialize the database connection
const initializeDatabase = async () => {
  try {
    console.log('Connecting to the database...');
    await dbConnect();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit process if the database connection fails
  }
};

// Function to initialize the server
const initializeServer = () => {
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
  app.use('/', productRoute); // Use a proper base path for APIs

  // Health check endpoint
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
  });

  // Start the server
  const PORT = process.env.PORT || 3005;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

// Connect to the database, then start the server
initializeDatabase().then(initializeServer);