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
    phrase: "11 benevolent elephants 11 benevolent elephants 11 benevolent elephants"
  },
  {
    phrase: "good blood bad blood good blood bad blood good blood bad blood"
  },
  {
    phrase: "which wrist watches are Swiss wrist watches"
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
    phrase: "we surely shall see the sunshine soon"
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
    phrase: "Fuzzy Wuzzy was a bear Fuzzy Wuzzy had no hair Fuzzy Wuzzy wasn't fuzzy was he"
  },
  {
    phrase: "I scream you scream we all scream for ice cream"
  },
  {
    phrase: "how much wood would a woodchuck chuck if a woodchuck could chuck wood"
  },
  {
    phrase: "if a dog chews shoes whose shoes does he choose"
  },
  {
    phrase: "truly rural truly rural truly rural"
  },
  {
    phrase: "Six sleek swans swam swiftly southward"
  },
  {
    phrase: "Gobbling gargoyles gobbled gobbling goblins"
  },
  {
    phrase: "Seven slick slimy snakes slowly sliding southward"
  },
  {
    phrase: "She was peculiarly waiting for him to pick peanuts"
  },
  {
    phrase: "Excited executioner exercising his excising powers excessively"
  },
  {
    phrase: "If you notice this notice you will notice that this notice is not worth noticing"
  },
  {
    phrase: "Big black bugs bleed blue black blood but baby black bugs bleed blue blood"
  },
  {
    phrase: "One smart fellow he felt smart two smart fellows they both felt smart three smart fellows they all felt smart"
  },
  {
    phrase: "A tutor who tooted the flute tried to tutor two tooters to toot"
  },
  {
    phrase: "These thousand tricky tongue twisters trip thrillingly off the tongue"
  },
  {
    phrase: "pad kid poured curd pulled cold pad kid poured curd pulled cold"
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