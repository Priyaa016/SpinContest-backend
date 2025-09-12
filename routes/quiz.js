const express = require('express');
const router = express.Router();
const connectDB = require('../utils/db');
const QuizQuestion = require('../models/QuizQuestion');
const CodingProblem = require('../models/CodingProblem');
const Score = require('../models/Score');

// Ensure DB connection
connectDB();

// Get Round 1 quiz questions by domain
router.get('/round1/:domain', async (req, res) => {
  try {
    const questions = await QuizQuestion.find({ domain: req.params.domain });
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Submit Round 1 score
router.post('/round1/submit', async (req, res) => {
  try {
    const { participantId, scoreValue, details } = req.body;
    const score = new Score({
      participant: participantId,
      level: 'Round 1',
      score_value: scoreValue,
      details
    });
    await score.save();
    res.status(201).json({ message: 'Round 1 score saved', score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get Round 2 coding problems
router.get('/round2/:domain', async (req, res) => {
  try {
    const problems = await CodingProblem.find({ domain: req.params.domain });
    res.json(problems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Submit Round 2 score
router.post('/round2/submit', async (req, res) => {
  try {
    const { participantId, scoreValue, details } = req.body;
    const score = new Score({
      participant: participantId,
      level: 'Round 2',
      score_value: scoreValue,
      details
    });
    await score.save();
    res.status(201).json({ message: 'Round 2 score saved', score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
