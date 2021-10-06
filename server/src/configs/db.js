require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI


//tausifSheikhAtlas
// const mongoURI = process.env.mongoURI
// const connectToMongo = async () => {
//     await mongoose.connect(mongoURI)
//     console.log("Connected to mongoDB successfully")
// }

const connectToMongo = () => {
    try {
        return mongoose.connect(MONGO_URI)
    }
    catch (err) {
        console.log(err.message);
    }
}

module.exports = connectToMongo