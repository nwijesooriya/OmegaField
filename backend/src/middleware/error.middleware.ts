import { NextFunction, Request, Response } from "express";

export function errorHandler(
  error: Error & { statusCode?: number },
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const statusCode = error.statusCode ?? 500;

  res.status(statusCode).json({
    message: error.message || "Internal server error",
  });
}