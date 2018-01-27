// es2015 modules
// import express from 'express';

//common js modules
const express = require('express');
// passport called
require('./services/passport');

const app = express();

//call the routes module with app
require('./routes/authRoutes')(app);

// for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
