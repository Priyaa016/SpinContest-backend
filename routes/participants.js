const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");

// Register participant
router.post("/register", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newParticipant = new Participant({ name, email, score: 0 });
    await newParticipant.save();
    res.status(201).json(newParticipant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Save spin result
router.post("/spin", async (req, res) => {
  try {
    const { participantId, result } = req.body;

    if (!participantId) {
      return res.status(400).json({ error: "Participant ID required" });
    }

    // find participant & update spin result
    const participant = await Participant.findById(participantId);
    if (!participant) {
      return res.status(404).json({ error: "Participant not found" });
    }

    participant.spinResult = result;
    await participant.save();

    res.json({ message: "Spin result saved", participant });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
