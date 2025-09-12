const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");

// Get all participants
router.get("/", async (req, res) => {
  const participants = await Participant.find();
  res.json(participants);
});

// Add new participant
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const participant = new Participant({ name, email });
    await participant.save();
    res.json(participant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
