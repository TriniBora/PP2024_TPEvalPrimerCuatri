const express = require("express");
const router = express.Router();
const { getBorrowings, createBorrowing, getBorrowingById, updateBorrowing, deleteBorrowing } = require('../controllers/borrowings.controller');


router.get('/borrowings', getBorrowings);

router.post('/borrowings', createBorrowing);

router.get('/borrowings/:id', getBorrowingById);

router.put('/borrowings/:id', updateBorrowing);

router.delete('/borrowings/:id', deleteBorrowing);

module.exports = router;