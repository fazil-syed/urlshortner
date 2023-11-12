const mongoose = require("mongoose");
const config = require("config");
let dotenv = require("dotenv").config();
const db = dotenv.parsed.MONGOURI;

//Connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connected to DB Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
