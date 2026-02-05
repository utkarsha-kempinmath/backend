const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//MongoDB connection 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log("DB connection error:", err.message));


//starting server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
