import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

export const adminRouter = Router();

adminRouter.get("/dashboard", authMiddleware, authorizeRoles("ADMIN"), (req, res) => {
  res.status(200).json({
    totalArticles: 145,
    totalUsers: 890,
    pendingComments: 23,
    categories: 8
  });
});
