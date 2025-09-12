// api/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http"); // new
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Example route
app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Backend is working!" });
});

// Wrap Express app with serverless
module.exports = serverless(app);
