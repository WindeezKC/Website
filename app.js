const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./controller/indexCont');
const userCon = require('./controller/userController');
const login = require('./controller/loginController');

/**
 * Creating a new express application
 */
 const app = express();

 /**
  * View engine setup
  */
 app.set("views", path.join(__dirname, "view"));
 app.set("view engine", "ejs");
 
 /**
  * Setting up middleware for logging
  */
 app.use(logger("dev"));
 /**
 * Setting up middleware for bodyParser
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Setting up static files path
 */
app.use(express.static(path.join(__dirname, "assets")));

/**
 *  Session setup
 */
app.use(
  session({
    secret: "NbAd",
    resave: false,
    saveUninitialized: true,
  })
);

/**
 * Database connection
 */