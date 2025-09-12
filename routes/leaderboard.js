const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// Get leaderboard
router.get("/", async (req, res) => {
  const leaderboard = await Score.find().sort({ round1: -1, round2: -1 }).populate("participant");
  res.json(leaderboard);
});

module.exports = router;
