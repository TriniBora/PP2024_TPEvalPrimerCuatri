const express = require("express");
const router = express.Router();
const { getBooks, createBook, getBookById, updateBook, deleteBook } = require('../controllers/books.controller');

router.get('/books', getBooks);

router.post('/books', createBook);

router.get('/books/:id', getBookById);

router.put('/books/:id', updateBook);

router.delete('/books/:id', deleteBook);

module.exports = router;