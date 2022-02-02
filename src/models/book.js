const mongoose = require('../database');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;