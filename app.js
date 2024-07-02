require('dotenv').config()
const express = require('express');
const app = express();

// Importing routes
const booksRoutes = require('./src/routes/books.routes');
const authorsRoutes = require('./src/routes/authors.routes');
const usersRoutes = require('./src/routes/users.routes');
const borrowingsRoutes = require('./src/routes/borrowings.routes');

// Middlewares
app.use(express.urlencoded({ extended: true })); // express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.json()); // is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.

// Routes
app.use("/biblioteca", booksRoutes);
app.use("/biblioteca", authorsRoutes);
app.use("/biblioteca", usersRoutes);
app.use("/biblioteca", borrowingsRoutes);

module.exports = app;