const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");


var bodyParser = require("body-parser");

const commonsrc = require("./src/commonrouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>errr", err);
  } else {
    console.log(`DB connected ${process.env.PORT}`);
  }
});

app.use("/", commonsrc);
app.listen(process.env.PORT);
