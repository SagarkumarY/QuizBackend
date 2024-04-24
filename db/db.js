const mongoose = require('mongoose');

// console.log("MongoDB URI:", process.env.MONGODB_URI);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err);
    }
}


module.exports = connectDB;