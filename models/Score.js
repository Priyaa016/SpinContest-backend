const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  participant: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant', required: true },
  level: { type: String, enum: ['Round 1', 'Round 2'], required: true },
  score_value: { type: Number, required: true },
  details: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);
