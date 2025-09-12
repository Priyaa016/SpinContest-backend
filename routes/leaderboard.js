const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");

// Get leaderboard
router.get("/", async (req, res) => {
    const participants = await Participant.find({}).sort({ total_score: -1 });
    res.json(participants);
});

module.exports = router;
