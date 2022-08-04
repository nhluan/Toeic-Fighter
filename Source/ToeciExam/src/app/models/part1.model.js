const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const part1Schema = new Schema({
  numTest: String,
  numQ: String,
  audioLink: String,
  imageLink: String,
  Answer: {
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
module.exports = mongoose.model("part1", part1Schema);
