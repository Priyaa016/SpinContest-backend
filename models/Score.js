const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  participant: { type: mongoose.Schema.Types.ObjectId, ref: "Participant" },
  round1: { type: Number, default: 0 },
  round2: { type: Number, default: 0 },
});

module.exports = mongoose.model("Score", ScoreSchema);
