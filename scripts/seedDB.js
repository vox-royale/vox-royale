const mongoose = require("mongoose");
const db = require("../models/Phrase");
mongoose.Promise = global.Promise;

console.log("db.Phrase: " + db.Phrase);

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vox-royale",
  {
    useMongoClient: true
  }
);

const phraseSeed = [
  {
    phrase: "The Dead Zone",
    numTokens: 3
  },
  {
    phrase: "The Free Zone",
    numTokens: 3
  },
  {
    phrase: "The Open Zone",
    numTokens: 3
  }
];

db.Phrase
  .remove({})
  .then(() => db.Phrase.collection.insertMany(phraseSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });