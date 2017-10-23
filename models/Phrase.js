const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phraseSchema = new Schema({
  phrase: { type: String, required: true },
  numTokens: { type: Number, required: true }
});

const Phrase = mongoose.model("Book", phraseSchema);

module.exports = Phrase;