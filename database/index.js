const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const password = process.env.DB_PASSWORD;

const db = mongoose.connect(`mongodb+srv://reviewsAdmin:${password}@cluster0-0qokg.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });

module.exports = db;
