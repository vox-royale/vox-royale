const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true }
});

const Book = mongoose.model("Phrase", bookSchema);

module.exports = Book;
