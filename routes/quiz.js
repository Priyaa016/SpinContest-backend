// routes/quiz.js  (replace or extend your existing file)
const express = require("express");
const router = express.Router();
const QuizQuestion = require("../models/QuizQuestion");
const Participant = require("../models/Participant");

// GET questions for a round (existing)
router.get("/:round", async (req, res) => {
  try {
    const { round } = req.params;
    const questions = await QuizQuestion.find({ round: Number(round) });
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// If you want a route that returns ALL questions regardless of round:
router.get("/", async (req, res) => {
  try {
    const questions = await QuizQuestion.find();
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Submit an answer and update participant score
router.post("/submit", async (req, res) => {
  try {
    const { questionId, answer, participantId } = req.body;
    if (!questionId || !participantId) return res.status(400).json({ error: "Missing fields" });

    const question = await QuizQuestion.findById(questionId);
    if (!question) return res.status(404).json({ error: "Question not found" });

    const participant = await Participant.findById(participantId);
    if (!participant) return res.status(404).json({ error: "Participant not found" });

    const correct = question.answer === answer;
    // Award points — adjust values as you want
    if (correct) {
      participant.score = (participant.score || 0) + 10;
      await participant.save();
    }

    res.json({ correct, message: correct ? "Correct! Score updated" : "Incorrect" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
