require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

const connectToMongo = () => {
    return mongoose.connect(MONGO_URI)
}

module.exports = connectToMongo