const express = require("express");
const cors = require("cors");

const { registerRoutes } = require("./routes");
const { notFound } = require("./middleware/notFound.middleware");
const { errorHandler } = require("./middleware/error.middleware");

function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(cors());
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true }));

  app.get("/api", (req, res) => {
    res.status(200).json({
      message: "OmegaField API is running.",
      status: "ok",
    });
  });

  registerRoutes(app);
  app.use(notFound);
  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
