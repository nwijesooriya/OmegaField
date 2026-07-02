export interface NewsArticle {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  author: string;
  category: string;
  publishedDate: string;
  featured: boolean;
}

export interface NewsApiResponse {
  data: NewsArticle[];
  total: number;
}

export interface CategoriesApiResponse {
  data: string[];
  total: number;
}