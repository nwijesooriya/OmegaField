import type { Category, NewsArticle } from "@/types/news";

export const categories: Category[] = [
  { name: "Cricket", slug: "cricket", description: "From the first ball to the final session. News, selection updates and analysis from the cricket desk." },
  { name: "Football", slug: "football", description: "The stories behind the beautiful game. Club football, national teams and the tactics that matter." },
  { name: "Rugby", slug: "rugby", description: "Club rivalries, school rugby and the road to international competition." },
  { name: "Athletics", slug: "athletics", description: "Track, field and the athletes pushing their limits. Follow the next generation of sporting talent." },
  { name: "Other Sports", slug: "other-sports", description: "Beyond the touchline. Discover emerging talent, community sport and perspectives from across the sporting world." },
];

export function categoryFor(article: NewsArticle): Category {
  return categories.find((category) => category.name === article.category) ?? categories[4];
}

export function articleSlug(article: NewsArticle): string {
  return article.slug ?? `${article.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${article.id}`;
}

export function articleHref(article: NewsArticle): string {
  return `/news/${articleSlug(article)}`;
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Colombo" }).format(new Date(value));
}
