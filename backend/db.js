const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/notebook_app?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongoDB successfully")
    })
}

module.exports = connectToMongo