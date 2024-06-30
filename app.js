require('dotenv').config()
const express = require("express");

const app = express();
console.log(process.env)

module.exports = app;