const mongoose = require('../database');
const autoIncrement = require('mongoose-auto-increment');

let db = mongoose.connection;

autoIncrement.initialize(db);

const bookSchema = new mongoose.Schema({
    bookId: {
        type: Number,
        required: true,
        index: true
    },
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

bookSchema.plugin(autoIncrement.plugin, {
    model: 'Book', field: 'bookId',
    startAt: 0,
    incrementBy: 1
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;