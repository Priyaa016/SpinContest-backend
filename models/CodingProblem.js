const mongoose = require("mongoose");

const codingProblemSchema = new mongoose.Schema({
    domain: { type: String, required: true },
    level: { type: String, required: true }, // "Round 2"
    problem_text: { type: String, required: true },
    test_cases: [{ type: String, required: true }],
    expected_outputs: [{ type: String, required: true }],
    expected_complexity: { type: String, default: "" }
});

module.exports = mongoose.model("CodingProblem", codingProblemSchema);
