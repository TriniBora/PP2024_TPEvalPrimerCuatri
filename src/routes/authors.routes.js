const express = require("express");
const router = express.Router();
const { getAuthors, createAuthor, getAuthorById, updateAuthor, deleteAuthor } = require('../controllers/authors.controller');


router.get('/authors', getAuthors);

router.post('/authors', createAuthor);

router.get('/authors/:id', getAuthorById);

router.put('/authors/:id', updateAuthor);

router.delete('/authors/:id', deleteAuthor);

module.exports = router;