require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

// const mongoURI = process.env.mongoURI
// const connectToMongo = async () => {
//     await mongoose.connect(mongoURI)
//     console.log("Connected to mongoDB successfully")
// }

const connectToMongo = () => {
    return mongoose.connect(MONGO_URI)
}

module.exports = connectToMongo