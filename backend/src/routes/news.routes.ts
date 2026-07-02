import { Router } from "express";

import { getNews } from "../controllers/news.controller";

export const newsRouter = Router();

newsRouter.get("/", getNews);