const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const port = process.env.PORT || 3001;
require("dotenv").config();
require("./config/database");

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
