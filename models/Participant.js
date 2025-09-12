const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dept: { type: String, required: true },
  year: { type: String, required: true },
  domain: { type: String, default: '' },  // Optional: can assign a domain later
  status: { type: String, default: 'Active' }, // Active / Eliminated
  total_score: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Participant', participantSchema);
