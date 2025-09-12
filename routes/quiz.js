const express = require("express");
const router = express.Router();
const QuizQuestion = require("../models/QuizQuestion");
const CodingProblem = require("../models/CodingProblem");
const Score = require("../models/Score");

// Get Round 1 quiz questions by domain
router.get("/round1/:domain", async (req, res) => {
    const questions = await QuizQuestion.find({ domain: req.params.domain });
    res.json(questions);
});

// Get Round 2 coding questions (as MCQs) by domain
router.get("/round2/:domain", async (req, res) => {
    const questions = await CodingProblem.find({ domain: req.params.domain, level: "Round 2" });
    res.json(questions);
});

// Submit score
router.post("/submit", async (req, res) => {
    try {
        const score = new Score(req.body);
        await score.save();
        res.json(score);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
