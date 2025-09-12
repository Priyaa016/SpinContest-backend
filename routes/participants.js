const express = require('express');
const router = express.Router();
const connectDB = require('../utils/db');
const Participant = require('../models/Participant');

// Ensure DB connection
connectDB();

// Register participant
router.post('/register', async (req, res) => {
  try {
    const { name, dept, year } = req.body;
    const participant = new Participant({
      name,
      dept,
      year,
      status: 'Active',
      total_score: 0
    });
    await participant.save();
    res.status(201).json({ message: 'Participant registered', participant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all participants (optional)
router.get('/', async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
