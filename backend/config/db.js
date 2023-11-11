const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongouri");

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
