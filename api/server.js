// api/server.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("../utils/db"); // keep your existing utils/db.js
const participantsRoutes = require("../routes/participants");
const quizRoutes = require("../routes/quiz");
const leaderboardRoutes = require("../routes/leaderboard");

const app = express();
app.use(cors());
app.use(express.json());

// connect DB once when cold-starting the lambda
let dbConnected = false;
async function ensureDB() {
  if (!dbConnected) {
    await connectDB(); // your db.js should connect using process.env.MONGO_URI
    dbConnected = true;
  }
}

// Mount routes (these routes assume they use relative paths like /api/participants)
app.use("/api/participants", participantsRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Optional health endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend API is working!" });
});

// Wrap the express app as a serverless handler for Vercel
const handler = serverless(app);

module.exports = async (req, res) => {
  // ensure DB then call handler
  try {
    await ensureDB();
    return handler(req, res);
  } catch (err) {
    console.error("Server handler error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
