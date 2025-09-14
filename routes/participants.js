const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");

// Register participant
router.post("/register", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) return res.status(400).json({ error: "Name & Email required" });

    // Check if email already exists
    const existing = await Participant.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already registered" });

    const newParticipant = new Participant({ name, email, score: 0 });
    await newParticipant.save();
    res.status(201).json(newParticipant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Save spin result
router.post("/spin", async (req, res) => {
  try {
    const { participantId, result } = req.body;
    if (!participantId) return res.status(400).json({ error: "Participant ID required" });

    const participant = await Participant.findById(participantId);
    if (!participant) return res.status(404).json({ error: "Participant not found" });

    participant.spinResult = result;
    await participant.save();

    res.json({ message: "Spin result saved", participant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
