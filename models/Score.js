const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    participant: { type: mongoose.Schema.Types.ObjectId, ref: "Participant", required: true },
    level: { type: String, required: true },
    score_value: { type: Number, required: true },
    details: { type: Object, default: {} }
});

module.exports = mongoose.model("Score", scoreSchema);
