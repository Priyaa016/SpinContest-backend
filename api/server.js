// backend/api/server.js
const express = require("express");
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

// Root route
app.get("/", (req, res) => {
  res.send("✅ SpinContest Backend is running!");
});

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "✅ Backend is working!" });
});

// Mount your routes
app.use("/participants", participantsRoutes);
app.use("/quiz", quizRoutes);
app.use("/leaderboard", leaderboardRoutes);

// Export handler for Vercel
module.exports = serverless(app);
