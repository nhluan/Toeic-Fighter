const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const part5Schema = new Schema({
  numTest: String,
  numQ: String,
  answer: String,
  Q: {
    type: String,
  },
  A: {
    type: String,
  },
  B: {
    type: String,
  },
  C: {
    type: String,
  },
  D: {
    type: String,
  },
});

module.exports = mongoose.model("part5", part5Schema);
