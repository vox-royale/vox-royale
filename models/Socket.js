const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phraseSchema = new Schema({
  socket: { type: String, required: true }
});

const Socket = mongoose.model("Socket", socketSchema);

module.exports = Phrase;