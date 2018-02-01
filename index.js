// es2015 modules
// import express from 'express';

//common js modules
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// passport called
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//call the routes module with app
require('./routes/authRoutes')(app);

// for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
