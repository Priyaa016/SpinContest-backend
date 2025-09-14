// utils/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return; // Already connected
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err; // important for serverless functions
  }
};

module.exports = connectDB;
