import { Request, Response } from "express";

import {
  getAllNewsArticles,
  getNewsCategories,
} from "../services/news.service";

export function getNews(req: Request, res: Response): void {
  const articles = getAllNewsArticles();

  res.status(200).json({
    data: articles,
    total: articles.length,
  });
}

export function getCategories(req: Request, res: Response): void {
  const categories = getNewsCategories();

  res.status(200).json({
    data: categories,
    total: categories.length,
  });
}