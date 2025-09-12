// backend/index.js
const app = require("./api/server"); // Import Express app (not serverless)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running locally at http://localhost:${PORT}`);
});
