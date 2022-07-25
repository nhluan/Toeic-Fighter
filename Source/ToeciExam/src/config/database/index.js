const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://group6:segroup6@cluster0.ksc4hbc.mongodb.net/ToeicExam?retryWrites=true&w=majority"
    );
    console.log("connect successfully");
  } catch (error) {
    console.log("conncet failure");
  }
}

module.exports = { connect };
