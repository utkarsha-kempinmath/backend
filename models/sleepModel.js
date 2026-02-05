const mongoose = require("mongoose");

const sleepSchema = new mongoose.Schema({
  user_id: String,
  date: String,

  total_duration: String,
  bed_time: String,
  wake_time: String
});

module.exports = mongoose.model("Sleep", sleepSchema);
