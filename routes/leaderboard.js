const express = require("express");
const Participant = require("../models/Participant");

const router = express.Router();

// Get leaderboard sorted by score
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Participant.find().sort({ score: -1 });
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
