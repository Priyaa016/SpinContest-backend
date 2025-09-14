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
const handler = serverless(async (req, res) => {
  try {
    // Ensure DB is connected before handling request
    if (!connectDB.isConnected) {
      await connectDB(); // await connection
    }
    return app(req, res); // Pass request to Express
  } catch (err) {
    console.error("Serverless handler error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

module.exports = { app, handler: serverless(app) };