// backend/utils/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  // If already connected, reuse connection
  if (mongoose.connection.readyState === 1) {
    return;
  }

  // Connect to MongoDB Atlas
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err; // propagate error to caller
  }
};

module.exports = connectDB;
