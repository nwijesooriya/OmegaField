import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

export const userRouter = Router();

userRouter.get("/dashboard", authMiddleware, authorizeRoles("USER", "ADMIN"), (req, res) => {
  const user = (req as any).user;
  res.status(200).json({
    message: `Welcome back, ${user.username}!`,
    savedArticlesCount: 12,
    commentHistoryCount: 5
  });
});
