const express = require("express")
require("dotenv").config()
const mongoose = require('mongoose')
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
    } 
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);    
    }
}

connectDB()
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error !!!:'));
db.once('open', () => console.log('Connected to MongoDB !'));
const PORT = process.env.PORT || 4040


    app.use("/product", require('./routes/products'))

app.listen(PORT, () => console.log('Server is running on Port ' + PORT))