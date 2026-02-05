const mongoose = require("mongoose");

const environmentSchema = new mongoose.Schema({
  user_id: String,
  date: String,

  ambient_light_lux: Number,
  sound_db: Number,
  temperature_c: Number,
  humidity_percent: Number,
  aqi: Number
});

module.exports = mongoose.model("Environment", environmentSchema);
