const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend API is working!" });
});

module.exports = app;            // for testing locally
module.exports.handler = serverless(app); // for Vercel