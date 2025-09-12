const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dept: { type: String, required: true },
    year: { type: String, required: true },
    domain: { type: String, default: "" },
    status: { type: String, default: "Active" },
    total_score: { type: Number, default: 0 }
});

module.exports = mongoose.model("Participant", participantSchema);
