const mongoose = require("mongoose");

const dailyRecordSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  // ---------------- SLEEP ----------------
  sleep: {
    total_duration: String,   // "7 hr 30 min"
    bed_time: String,
    wake_time: String
  },

  // ---------------- ENVIRONMENT ----------------
  environment: {
    ambient_light_lux: Number,
    sound_db: Number,
    temperature_c: Number,
    humidity_percent: Number,
    aqi: Number
  },

  // ---------------- MOVEMENT ----------------
  movement: {
    steps: Number,
    active_duration: String,
    sedentary_duration: String
  },

  // ---------------- SCREEN ----------------
  screen_time: {
    total_duration: String
  }

}, { timestamps: true });

module.exports = mongoose.model("DailyRecord", dailyRecordSchema);
