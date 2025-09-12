// api/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http"); // wrap Express for Vercel
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Example route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Export as serverless function
module.exports = app;
module.exports.handler = serverless(app);
