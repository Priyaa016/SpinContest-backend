// index.js (optional, root of backend folder)
const serverless = require("serverless-http");
const app = require("./api/server"); // import your Express app

module.exports.handler = serverless(app);
