
const compression = require('compression');
const path = require('path');

const express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

mongoose.Promise = Promise;

const app = express();


app.use(compression());
app.use('/api/speech-to-text/', require('./stt-token.js'));

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db = process.env.MONGODB_URI || "mongodb://localhost/vox-royale";

mongoose.connect(db, function(error) {
  
  if (error) {
    console.log(error);
  }
  
  else {
    console.log("mongoose connection is successful");
  }
});

app.use(express.static("client/build"));

require("./controllers/voxController")(app);

app.listen(PORT, function() {
    console.log("App running on http://localhost:" + PORT);
});