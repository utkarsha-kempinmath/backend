const mongoose = require("mongoose");

const movementSchema = new mongoose.Schema({
  user_id: String,
  date: String,

  steps: Number,
  active_duration: String,
  sedentary_duration: String
});

module.exports = mongoose.model("Movement", movementSchema);
