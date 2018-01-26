// es2015 modules
// import express from 'express';

//common js modules
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-goggle-oath20').Strategy;
const app = express();

passport.use(new GoogleStrategy());

// for heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
