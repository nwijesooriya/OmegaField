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

export interface ApiResponse<T> {
  data: T;
  total: number;
}