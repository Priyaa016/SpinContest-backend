const express = require("express");
const QuizQuestion = require("../models/QuizQuestion");

const router = express.Router();

// Get all quiz questions
router.get("/", async (req, res) => {
  try {
    const questions = await QuizQuestion.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a quiz question
router.post("/", async (req, res) => {
  try {
    const question = new QuizQuestion(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
