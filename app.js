require('dotenv').config()
const express = require('express');
const app = express();

// Importing routes
const booksRoutes = require('./src/routes/books.routes');
const authorsRoutes = require('./src/routes/authors.routes');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/biblioteca", booksRoutes);
app.use("/biblioteca", authorsRoutes);

module.exports = app;