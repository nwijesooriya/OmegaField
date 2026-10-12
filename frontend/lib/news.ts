import { cache } from "react";
import { fallbackNewsArticles } from "@/lib/mock-news";
import { getNewsArticles } from "@/lib/api";
import { articleSlug } from "@/lib/categories";

// Local coverage is the default for Phase 1. Opt in to the existing API
// once the backend editorial catalogue is ready; no new endpoints needed.
export const getPublishedArticles = cache(async () => {
  const articles = process.env.NEWS_DATA_SOURCE === "api"
    ? await getNewsArticles()
    : fallbackNewsArticles;
  return [...articles].sort((a, b) => Date.parse(b.publishedDate) - Date.parse(a.publishedDate));
});

export async function getArticleBySlug(slug: string) {
  return (await getPublishedArticles()).find((article) => articleSlug(article) === slug);
}
