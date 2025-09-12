const mongoose = require('mongoose');

const codingProblemSchema = new mongoose.Schema({
  domain: { type: String, required: true }, // e.g., "Data Structures"
  title: { type: String, required: true },
  description: { type: String, required: true },
  sample_input: { type: String, default: '' },
  sample_output: { type: String, default: '' },
  difficulty: { type: String, default: 'Medium' } // Easy / Medium / Hard
}, { timestamps: true });

module.exports = mongoose.model('CodingProblem', codingProblemSchema);
