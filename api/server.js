// api/server.js
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();

const connectDB = require("../utils/db");
const participantsRoutes = require("../routes/participants");
const quizRoutes = require("../routes/quiz");
const leaderboardRoutes = require("../routes/leaderboard");

const app = express();
app.use(express.json());
app.use(cors());

// Mount routes
app.use("/api/participants", participantsRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Optional test endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend API is working!" });
});

// ✅ Serverless handler for Vercel
const handler = async (req, res) => {
  try {
    await connectDB(); // Ensure MongoDB connection on each request
    return app(req, res); // Pass request to Express
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
};

// Export serverless handler for Vercel 
module.exports = serverless(app); 
// Export app for local dev 
module.exports.app = app;