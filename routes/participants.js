const express = require("express");
const router = express.Router();
const Participant = require("../models/Participant");

// Create participant
router.post("/", async (req, res) => {
    try {
        const participant = new Participant(req.body);
        await participant.save();
        res.status(201).json(participant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update participant domain after spin
router.put("/:id/domain", async (req, res) => {
    try {
        const participant = await Participant.findByIdAndUpdate(
            req.params.id,
            { domain: req.body.domain },
            { new: true }
        );
        res.json(participant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update total_score
router.put("/:id/score", async (req, res) => {
    try {
        const participant = await Participant.findByIdAndUpdate(
            req.params.id,
            { total_score: req.body.total_score },
            { new: true }
        );
        res.json(participant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
