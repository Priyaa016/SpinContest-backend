const mongoose = require("mongoose");

const QuizQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true } // index of correct option
});

module.exports = mongoose.model("QuizQuestion", QuizQuestionSchema);
