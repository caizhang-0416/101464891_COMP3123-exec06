const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields

//      - noteDescription

const noteSchema = new mongoose.Schema({
// - noteTitle
    noteTitle: {
        type: String,
        required: true,
        trim: true
    },
    // - priority (Value can be HIGH, LOW or MEDUIM)
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'], // Enum to restrict values
        required: true
    },
    // - dateAdded
    dateAdded: {
        type: Date,
        default: Date.now 
    },
    //      - dateUpdated
    dateUpdated: {
        type: Date
    }
});

// Create the Note model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
