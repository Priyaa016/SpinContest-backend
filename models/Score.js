const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  participantId: { type: mongoose.Schema.Types.ObjectId, ref: "Participant", required: true },
  points: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Score", ScoreSchema);
