import { Request, Response, NextFunction } from "express";

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // req.user should be populated by authMiddleware
    const user = (req as any).user;

    if (!user) {
      res.status(401).json({ error: "Unauthorized: No user found" });
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      res.status(403).json({ error: "Forbidden: You do not have permission to access this resource" });
      return;
    }

    next();
  };
};
