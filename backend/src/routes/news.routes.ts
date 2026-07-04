import { Router } from "express";

import { getNews } from "../controllers/news.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

export const newsRouter = Router();

// Public routes
newsRouter.get("/", getNews);
newsRouter.get("/:id", (req, res) => {
  res.status(200).json({ message: "Get single news placeholder" });
});

// Protected ADMIN routes
newsRouter.post("/", authMiddleware, authorizeRoles("ADMIN"), (req, res) => {
  res.status(201).json({ message: "Created news placeholder" });
});

newsRouter.put("/:id", authMiddleware, authorizeRoles("ADMIN"), (req, res) => {
  res.status(200).json({ message: "Updated news placeholder" });
});

newsRouter.delete("/:id", authMiddleware, authorizeRoles("ADMIN"), (req, res) => {
  res.status(200).json({ message: "Deleted news placeholder" });
});