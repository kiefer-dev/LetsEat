const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const restaurantRoutes = require("./routes/restaurants");
const restaurantCommentRoutes = require("./routes/restaurantComments");
const menuitemRoutes = require("./routes/menuitems");

require("dotenv").config({ path: "./config/.env" }); // Use .env file in config folder
require("./config/passport")(passport); // Passport config

connectDB(); // Connect To Database

app.set("view engine", "ejs"); // Using EJS for views
app.use(express.static("public")); // Static Folder
app.use(express.urlencoded({ extended: true })); // Body Parsing
app.use(express.json()); // Body Parsing
app.use(logger("dev")); // Logging
app.use(methodOverride("_method")); // Use forms to put / delete

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

app.use(passport.initialize()); // Passport middleware
app.use(passport.session()); // Passport middleware
app.use(flash()); // Use flash messages for errors, info, ect...

// Setup routes to listen for
app.use("/", mainRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/restaurantComments", restaurantCommentRoutes);
app.use("/menuitems", menuitemRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`The server is now running on port ${process.env.PORT}`);
});