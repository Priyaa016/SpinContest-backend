// index.js
const { app } = require("./api/server");
const PORT = process.env.PORT || 5000;

// Only start the server if running locally (not in serverless/Vercel)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on http://localhost:${PORT}`);
  });
}
