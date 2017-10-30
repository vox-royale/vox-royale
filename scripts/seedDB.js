const mongoose = require("mongoose");
const db = require("../models");
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
    phrase: "She sells seashells by the seashore"
  },
  {
    phrase: "How can a clam cram in a clean cream can"
  },
  {
    phrase: "Susie works in a shoeshine shop where she shines she sits and where she sits she shines"
  },
  {
    phrase: "can you can a can as a canner can can a can"
  },
  {
    phrase: "I wish to wash my Irish wristwatch"
  },
  {
    phrase: "I slit the sheet the sheet I slit and on the slitted sheet I sit"
  },
  {
    phrase: "A skunk sat on a stump and thunk the stump stunk but the stump thunk the skunk stunk"
  },
  {
    phrase: "Lesser leather never weathered wetter weather better"
  },
  {
    phrase: "Can you can a can as a canner can can a can"
  },
  {
    phrase: "You know New York you need New York you know you need unique New York"
  },
  {
    phrase: "How many boards could the Mongols hoard if the Mongol hordes got bored"
  },
  {
    phrase: "Denise sees the fleece Denise sees the fleas at least Denise could sneeze and feed and freeze the fleas"
  },
  {
    phrase: "I wish to wish the wish you wish to wish but if you wish the wish the witch wishes I won't wish the wish you wish to wish"
  },
  {
    phrase: "did Dick Pickens prick his pinkie pickling cheap cling peaches in an inch of pinch or framing his famed French finch photos"
  },
  {
    phrase: "How much pot could a pot roast roast if a pot roast could roast pot"
  },
  {
    phrase: "Pete's pa Pete poked to the pea patch to pick a peck of peas for the poor pink pig in the pine hole pig pen"
  },
  {
    phrase: "birdie birdie in the sky laid a turdie in my eye if cows could fly I'd have a cow pie in my eye"
  },
  {
    phrase: "how much caramel can a canny canonball cram in a camel if a canny canonball can cram caramel in a camel"
  },
  {
    phrase: "she stood on the balcony inexplicably mimicking him hiccuping and amicably welcoming him in"
  },
  {
    phrase: "love is a feeling you feel when you feel you're going to feel the feeling you've never felt before"
  },
  {
    phrase: "if colored caterpillars could change their colors constantly could they keep their colored coat colored properly"
  },
  {
    phrase: "how much ground could a groundhog grind if a groundhog could grind ground"
  },
  {
    phrase: "Betty bought a bit of butter but she found the butter bitter so Betty bought a bit of better butter to make the bitter butter better"
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