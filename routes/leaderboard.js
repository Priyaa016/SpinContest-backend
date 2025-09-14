const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");

// Get leaderboard
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Participant.find().sort({ score: -1 });
    res.json(leaderboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
