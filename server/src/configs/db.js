require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://tausifsheikh:tausifSheikhAtlas@cluster0.6o6vf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


//tausifSheikhAtlas
// const mongoURI = "mongodb://localhost:27017/notebook_app"
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