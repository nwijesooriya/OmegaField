import Link from "next/link";
import type { Category, NewsArticle } from "@/types/news";
import { categoryFor } from "@/lib/categories";
import { SectionTitle } from "./section-title";
import { NewsCard } from "./news-card";

export function CategorySection({ category, articles }: { category: Category; articles: NewsArticle[] }) {
  const stories = articles.filter((article) => categoryFor(article).slug === category.slug).slice(0, 3);
  return <section aria-label={category.name} className="space-y-5 border-t border-slate-300 pt-7">
    <div className="flex items-center justify-between gap-4"><SectionTitle eyebrow="" title={category.name} /><Link href={`/${category.slug}`} className="shrink-0 text-sm font-semibold text-red-700 hover:underline">View all <span aria-hidden="true">→</span><span className="sr-only"> {category.name} stories</span></Link></div>
    {stories.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{stories.map((article) => <NewsCard key={article.id} article={article} />)}</div> : <p className="py-6 text-sm text-slate-500">Coverage from this desk is coming soon.</p>}
  </section>;
}
