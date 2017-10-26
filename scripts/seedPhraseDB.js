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

const phraseSeed = [
  {
<<<<<<< HEAD
    title: "She sells seashells by the seashore"
 
  },
  {
    title: "How can a clam cram in a clean cream can"
    
  },
  {
    title: "I saw Susie sitting in a shoeshine shop"
   
=======
    title: "She sells seashells by the seashore" 
  },
  {
    title: "How can a clam cram in a clean cream can"
  },
  {
    title: "I saw Susie sitting in a shoeshine shop"
>>>>>>> 92994937ab8a14547a94bcd5b592ce36a9ad6069
  },
  {
    title: "Can you can a can as a canner can can a can"
  },
  {
    title: "I wish to wash my Irish wristwatch"
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 92994937ab8a14547a94bcd5b592ce36a9ad6069
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