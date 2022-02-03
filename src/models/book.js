const mongoose = require('../database');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;