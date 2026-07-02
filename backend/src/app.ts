import cors from "cors";
import express from "express";

import { errorHandler } from "./middleware/error.middleware";
import { notFound } from "./middleware/notFound.middleware";
import { registerRoutes } from "./routes";

export function createApp() {
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