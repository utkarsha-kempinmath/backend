const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  age: Number,
  gender: String
});

module.exports = mongoose.model("User", userSchema);
