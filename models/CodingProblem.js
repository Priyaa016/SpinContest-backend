const mongoose = require("mongoose");

const CodingProblemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },
});

module.exports = mongoose.model("CodingProblem", CodingProblemSchema);
