const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
  user_id: String,
  date: String,

  total_duration: String
});

module.exports = mongoose.model("ScreenTime", screenSchema);
