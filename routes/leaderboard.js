const express = require('express');
const router = express.Router();
const connectDB = require('../utils/db');
const Participant = require('../models/Participant');
const Score = require('../models/Score');

// Ensure DB connection
connectDB();

// Get leaderboard
router.get('/', async (req, res) => {
  try {
    // Aggregate total scores for participants
    const scores = await Score.aggregate([
      {
        $group: {
          _id: "$participant",
          totalScore: { $sum: "$score_value" }
        }
      },
      { $sort: { totalScore: -1 } }
    ]);

    // Populate participant info
    const leaderboard = await Participant.populate(scores, { path: "_id", select: "name dept year domain status" });

    res.json(leaderboard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
