import { mockNewsArticles } from "../data/mockNews";
import { NewsArticle } from "../models/news";
import { uniqueValues } from "../utils/collection";

function sortByPublishedDateDesc(articles: NewsArticle[]): NewsArticle[] {
  return [...articles].sort(
    (left, right) =>
      new Date(right.publishedDate).getTime() -
      new Date(left.publishedDate).getTime(),
  );
}

export function getAllNewsArticles(): NewsArticle[] {
  return sortByPublishedDateDesc(mockNewsArticles);
}

export function getFeaturedNewsArticles(): NewsArticle[] {
  return getAllNewsArticles().filter((article) => article.featured);
}

export function getNewsCategories(): string[] {
  return uniqueValues(getAllNewsArticles().map((article) => article.category));
}