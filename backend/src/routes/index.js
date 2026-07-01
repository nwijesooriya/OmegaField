const { healthRouter } = require("./health.routes");

function registerRoutes(app) {
  app.use("/api/health", healthRouter);
}

module.exports = { registerRoutes };
