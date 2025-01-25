const mongoose = require('mongoose');
require('dotenv').config
const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://sahalvv9656:31wBdmjPviqgt6jZ@cluster0.on2wm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit the app if the DB connection fails
  }
};

module.exports = dbConnect;
