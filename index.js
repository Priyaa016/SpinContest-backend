// backend/index.js
const app = require("./api/server"); // Import the Express app, not the serverless handler

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
