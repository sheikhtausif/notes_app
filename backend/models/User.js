const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: Date.now,
    },
});

const User = mongoose.model('user', userSchema)
// User.createIndexes()
module.exports = User
