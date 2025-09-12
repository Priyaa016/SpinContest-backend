const express = require("express");
const Participant = require("../models/Participant");

const router = express.Router();

// Register participant
router.post("/", async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).json(participant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all participants
router.get("/", async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
