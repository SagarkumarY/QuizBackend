const express = require('express');
const cors = require('cors')
require('dotenv').config();
const connectDB = require('./db/db');
const questionRoutes = require('./routes/questionRoutes');
// const question = require("./model/questionSchema")
// const dummyData = require('./dummy')


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors())

// Define your routes and middleware here

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Function to add dummy data to the database
// async function addDummyData() {
//     try {
//       // Delete existing data to avoid duplication
//       await question.deleteMany();
  
//       // Add the dummy data to the database
//       await question.insertMany(dummyData);
  
//       console.log('Dummy data added successfully');
//     } catch (err) {
//       console.error('Error adding dummy data:', err);
//     }
//   }
  
//   addDummyData();
  


// Route for questions CRUD operations
app.use('/questions', questionRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port http://localhost:${PORT}`);
});


