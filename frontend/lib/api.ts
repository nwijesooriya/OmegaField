import { CategoriesApiResponse, NewsApiResponse } from "@/types/news";
import { fallbackNewsArticles } from "@/lib/mock-news";

const backendBaseUrl =
  process.env.BACKEND_API_URL ?? process.env.NEXT_PUBLIC_BACKEND_API_URL ?? "http://localhost:4000";

async function fetchJson<T>(path: string): Promise<T> {
  try {
    const response = await fetch(`${backendBaseUrl}${path}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Request failed for ${path}`);
    }

    return (await response.json()) as T;
  } catch {
    if (path === "/api/news") {
      return {
        data: fallbackNewsArticles,
        total: fallbackNewsArticles.length,
      } as T;
    }

    if (path === "/api/categories") {
      const categories = [...new Set(fallbackNewsArticles.map((article) => article.category))];

      return {
        data: categories,
        total: categories.length,
      } as T;
    }

    throw new Error(`Request failed for ${path}`);
  }
}

export async function getNewsArticles() {
  const response = await fetchJson<NewsApiResponse>("/api/news");
  return response.data;
}

export async function getNewsCategories() {
  const response = await fetchJson<CategoriesApiResponse>("/api/categories");
  return response.data;
}