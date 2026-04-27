const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace with your MongoDB connection string
        await mongoose.connect('mongodb://localhost:27017/fruitDB');
        console.log("Database Connected...");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;