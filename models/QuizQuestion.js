const mongoose = require('mongoose');

const quizQuestionSchema = new mongoose.Schema({
  domain: { type: String, required: true }, // e.g., "Math", "Logic"
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('QuizQuestion', quizQuestionSchema);
