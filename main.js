const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./Database/connect');
const bodyParser = require("body-parser");
require("dotenv").config();
const dns = require("node:dns/promises");
const fruit = require ('./Model/fruit model');
const fruitRoutes  = require ('./Routes/routes')
dns.setServers(['1.1.1.1']);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const fruitRoutes = require("./routes/fruitRoutes");

// Use Routes
app.use("/api/fruits", fruitRoutes);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});