// backend/api/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();

const connectDB = require("../utils/db");

// Import routes
const participantsRoutes = require("../routes/participants");
const quizRoutes = require("../routes/quiz");
const leaderboardRoutes = require("../routes/leaderboard");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB().catch(err => console.error("❌ MongoDB connection failed:", err));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Mount routes
app.use("/api/participants", participantsRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// ✅ Export the Express app (for local testing)
module.exports = app;

// ✅ Export the handler (for Vercel serverless)
module.exports.handler = serverless(app);
