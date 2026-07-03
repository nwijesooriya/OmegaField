import { Express } from "express";

import { categoryRouter } from "./category.routes";
import { healthRouter } from "./health.routes";
import { newsRouter } from "./news.routes";
import authRouter from "./auth.routes";

export function registerRoutes(app: Express): void {
  app.use("/api/health", healthRouter);
  app.use("/api/news", newsRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/auth", authRouter);
}