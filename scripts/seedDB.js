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
    phrase: "she sells seashells by the seashore"
  },
  {
    phrase: "how can a clam cram in a clean cream can"
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
    phrase: "a skunk sat on a stump and thunk the stump stunk but the stump thunk the skunk stunk"
  },
  {
    phrase: "lesser leather never weathered wetter weather better"
  },
  {
    phrase: "you know New York you need New York you know you need unique New York"
  },
  {
    phrase: "how many boards could the Mongols hoard if the Mongol hordes got bored"
  },
  {
    phrase: "I wish to wish the wish you wish to wish but if you wish the wish the witch wishes I won't wish the wish you wish to wish"
  },
  {
    phrase: "birdie birdie in the sky laid a turdy in my eye if cows could fly I'd have a cow pie in my eye"
  },
  {
    phrase: "how much caramel can a canny canonball cram in a camel if a canny canonball can cram caramel in a camel"
  },
  {
    phrase: "she stood on the balcony inexplicably mimicking him hiccuping and amicably welcoming him in"
  },
  {
    phrase: "if colored caterpillars could change their colors constantly could they keep their colored coat colored properly"
  },
  {
    phrase: "how much ground could a groundhog grind if a groundhog could grind ground"
  },
  {
    phrase: "Betty bought a bit of butter but she found the butter bitter so Betty bought a bit of better butter to make the bitter butter better"
  },
  {
    phrase: "6 sticky skeletons 6 sticky skeletons 6 sticky skeletons"
  },
  {
    phrase: "11 benevolent elephants 11 benevolent elephants 11 benevolent elephants"
  },
  {
    phrase: "good blood bad blood good blood bad blood good blood bad blood"
  },
  {
    phrase: "which wrist watches are Swiss wrist watches"
  },
  {
    phrase: "he threw 3 free throws"
  },
  {
    phrase: "Tim threw 3 thumbtacks"
  },
  {
    phrase: "red buick blue buick red buick blue buick red buick blue buick"
  },
  {
    phrase: "wayne went to wales to watch walruses"
  },
  {
    phrase: "thin sticks thick bricks thin sticks thick bricks thin sticks thick bricks"
  },
  {
    phrase: "stupid superstition stupid superstition stupid superstition"
  },
  {
    phrase: "flash message flash message flash message"
  },
  {
    phrase: "Fred fed Ted bread and Ted fed Fred bread"
  },
  {
    phrase: "we surely shall see the sun shine soon"
  },
  {
    phrase: "I saw a kitten eating chicken in the kitchen"
  },
  {
    phrase: "a big black bear sat on a big black rug"
  },
  {
    phrase: "I thought I thought of thinking of thanking you"
  },
  {
    phrase: "so this is the sushi chef"
  },
  {
    phrase: "snap crackle pop snap crackle pop snap crackle pop"
  },
  {
    phrase: "4 fine fresh fish for you"
  },
  {
    phrase: "flash message flash message flash message"
  },
  {
    phrase: "Fuzzy Wuzzy was a bear Fuzzy Wuzzy had no hair Fuzzy Wuzzy wasn’t fuzzy was he"
  },
  {
    phrase: "I scream you scream we all scream for ice cream"
  },
  {
    phrase: "how much wood would a woodchuck chuck if a woodchuck could chuck wood"
  },
  {
    phrase: "9 nice night nurses nursing nicely"
  },
  {
    phrase: "stupid superstition"
  },
  {
    phrase: "if a dog chews shoes whose shoes does he choose"
  },
  {
    phrase: "truly rural truly rural truly rural"
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