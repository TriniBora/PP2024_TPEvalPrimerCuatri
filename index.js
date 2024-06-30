require('dotenv').config()
const express = require("express");
const app = require("./app");

// Environment variables
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'localhost';
const path = process.env.API_PATH || '/biblioteca';
const appUrl = `http://${domain}:${port}/${path}`;

// Server connection
app.listen(port, () => {
  console.log(`Server is running on ${appUrl}`);
});