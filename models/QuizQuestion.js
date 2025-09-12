const mongoose = require("mongoose");

const quizQuestionSchema = new mongoose.Schema({
    domain: { type: String, required: true },
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correct_answer: { type: String, required: true }
});

module.exports = mongoose.model("QuizQuestion", quizQuestionSchema);
