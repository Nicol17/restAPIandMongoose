const express = require('express');
const router = express.Router();
const Book = require('../models/Books')

// GET ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Book.find();
        res.json(posts)
    } catch (err) {
        res.json({message:err})
    }
});

// SUBMIT A POST
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn
    });

    try{
    const savedBook = await book.save();
    res.json(savedBook);
    } catch (err) {
        res.json({message: err});
    }
});

// SPECIFIC BOOK
router.get('/:bookId', async (req, res) => {
    try{
    const book = Book.findById(req.params.bookId);
    res.json(book);
    } catch (err) {
        res.json({message: err});
    }
})

// DELETE POST 
router.delete('/:bookId', async (req, res) => {
    try{    
        const removedBook = await Book.remove({_id: req.params.bookId})
        res.json(removedBook);
    } catch (err) {
        res.json({message: err})
    }
})

// UPDATE A POST 
router.patch('/:bookId', async (req, res) => {
    try {
    const updatedBook = await Book.updateOne(
        {_id: req.params.bookId }, 
        { $set: {title: req.body.title } }
        );
    res.json(updatedBook);
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;