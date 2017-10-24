const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server);
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

mongoose.Promise = Promise;

// io.listen(PORT);
// console.log('socket.io listening on port ', PORT);
const user = {}
io.on('connection', (socket) => {
  console.log(socket.id + " connected");
  socket.on('disconnect', function () {
    console.log(socket.id + " disconnected");
  });
});

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = process.env.MONGODB_URI || "mongodb://localhost/vox-royale";

mongoose.connect(db, function (error) {

  if (error) {
    console.log(error);
  }

  else {
    console.log("mongoose connection is successful");
  }
});

app.use(express.static("client/build"));

require("./controllers/voxController")(app);

server.listen(PORT, function () {
  console.log("App running on http://localhost:" + PORT);
  console.log('socket.io listening on port ', PORT);
});