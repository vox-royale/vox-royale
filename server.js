const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server);
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

mongoose.Promise = Promise;

const user = {}

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = process.env.MONGODB_URI || "mongodb://localhost/vox-royale";

mongoose.connect(db, { useMongoClient: true }, function (error) {

	if (error) {
		console.log(error);
	}

	else {
		console.log("mongoose connection is successful");
	}
});

app.use(express.static("client/build"));

require("./controllers/voxController")(app);

io.on('connection', function (client) {

	console.log(client.id + " connected");

	client.on("join", function (data) {
		console.log(data + client.id);
		client.emit("id", client.id);
	});

	client.on('disconnect', function () {
		console.log(client.id + " disconnected");
	});
});

server.listen(PORT, function () {
	console.log("App running on http://localhost:" + PORT);
	console.log('socket.io listening on port ', PORT);
});