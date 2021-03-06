const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
},
    { timestamps: true, versionKey: false }
);
const Notes = mongoose.model('notes', notesSchema)
module.exports = Notes
