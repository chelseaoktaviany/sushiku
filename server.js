"use strict";

//get all the tool we need
const express = require("express");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

//set the default env port
const port = process.env.PORT || 3000;

//using routes
const routes = require("./routes/index.js");

//initialize a new express application
const app = express();

//creating sessionStore
const sessionStore = new session.MemoryStore();

//allowing us to pass data from the form (parsing JSON data)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//using cookie parser, sessions, and flash
app.use(cookieParser("secret"));
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 6000 },
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
  })
);

//initialize flash
app.use(flash());

//custom flash middleware
app.use(function (req, res, next) {
  res.locals.sessionFlash = req.session.sessionFlash;
  delete req.session.sessionFlash;
  next();
});

//setup our express application
app.use("/public", express.static(process.cwd() + "/public"));

//templating engine
app.set("view engine", "ejs");

//setting up routes
app.use("/", routes);

//start the server
app.listen(port, function () {
  console.log(`Server is listening on port ${port}...`);
});
