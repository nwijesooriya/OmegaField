import { Express } from "express";

import { categoryRouter } from "./category.routes";
import { healthRouter } from "./health.routes";
import { newsRouter } from "./news.routes";
import authRouter from "./auth.routes";
import { adminRouter } from "./admin.routes";
import { userRouter } from "./user.routes";

export function registerRoutes(app: Express): void {
  app.use("/api/health", healthRouter);
  app.use("/api/news", newsRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/admin", adminRouter);
  app.use("/api/user", userRouter);
}