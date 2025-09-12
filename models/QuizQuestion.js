const mongoose = require("mongoose");

const QuizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String }],
  answer: { type: String, required: true },
  round: { type: Number, required: true },
});

module.exports = mongoose.model("QuizQuestion", QuizQuestionSchema);
