import { Router } from "express";

import { getCategories } from "../controllers/news.controller";

export const categoryRouter = Router();

categoryRouter.get("/", getCategories);