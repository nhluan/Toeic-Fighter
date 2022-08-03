const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const part1Schema = new Schema({
  test: {
    type: String,
  },
  Q1: {
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
  },
  Q2: {
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
  },
  Q3: {
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
  },
  Q4: {
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
  },
  Q5: {
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
  },
  Q6: {
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
  },
});
module.exports = mongoose.model("part1", part1Schema);
