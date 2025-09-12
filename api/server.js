// backend/api/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const participantsRoutes = require("../routes/participants");
const quizRoutes = require("../routes/quiz");
const leaderboardRoutes = require("../routes/leaderboard");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Mount routes
app.use("/api/participants", participantsRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
