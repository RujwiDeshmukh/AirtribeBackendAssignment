const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: [true, "Please use a valid URL"]
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  referenceCount: {
    type: Number,
    required: true,
  },
  upvotesCount: {
    type: Number,
    required: true,
  },
  totalAnswers: {
    type: Number,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
