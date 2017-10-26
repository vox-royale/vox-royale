// Require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  isLoggedIn: { type: Boolean, default: false },
  wins: { type: Number, default: 0 },
  losses: {type: Number, default: 0 },
  socket: { type: Schema.Types.ObjectId, ref: "Socket" }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;