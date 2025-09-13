const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 },
  spinResult: { type: String }  // <-- Added field
});

module.exports = mongoose.model("Participant", participantSchema);
