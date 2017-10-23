const mongoose = require("mongoose");
const db = require("../models");

mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vox-royale",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    title: "She sells seashells by the seashore",
    numTokens: 6
  },
  {
    title: "How can a clam cram in a clean cream can",
    numTokens: 10
  },
  {
    title: "I saw Susie sitting in a shoeshine shop",
    numTokens: 8
  },
  {
    title: "Can you can a can as a canner can can a can",
    numTokens: 12
  },
  {
    title: "I wish to wash my Irish wristwatch",
    numTokens: 7
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
