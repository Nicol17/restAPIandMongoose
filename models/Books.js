const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    isbn: {
        type: Number,
        required: true
    },


    description: {
        type: String,
        required: true
    }, 

    cover: {
        type: Image,
        default: none
    }
});

module.exports = mongoose.model('Books', BooksSchema)

