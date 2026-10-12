export interface NewsArticle {
  id: string;
  slug?: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  author: string;
  category: string;
  publishedDate: string;
  featured: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export type AdPlacement = "homepage-sidebar" | "homepage-banner" | "category-sidebar" | "article-banner";

export interface Advertisement {
  id: string;
  title: string;
  image?: string;
  targetUrl?: string;
  placement: AdPlacement;
  startDate?: string;
  endDate?: string;
  active: boolean;
}

export interface NewsApiResponse {
  data: NewsArticle[];
  total: number;
}

export interface CategoriesApiResponse {
  data: string[];
  total: number;
}
