const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// const morgan = require('morgan');
// app.use(morgan('dev'));

// Separated routes for each resource
const gameRoutes = require("./routes/game.js")

// set the engine type
app.set("view engine", "ejs");  

app.use(express.static("public"));

// Mount all resource routes
app.use("/", gameRoutes());


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})