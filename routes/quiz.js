const express = require("express");
const router = express.Router();
const QuizQuestion = require("../models/QuizQuestion");

// Get quiz questions by round
router.get("/:round", async (req, res) => {
  const { round } = req.params;
  const questions = await QuizQuestion.find({ round });
  res.json(questions);
});

module.exports = router;
