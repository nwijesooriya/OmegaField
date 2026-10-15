import Link from "next/link";
import { articleHref } from "@/lib/categories";
import type { NewsArticle } from "@/types/news";
import { Container } from "./container";

export function TrendingBar({ articles }: { articles: NewsArticle[] }) {
  return <div className="border-b border-slate-200 bg-white/60"><Container className="flex items-center gap-5 py-3">
    <span className="shrink-0 border-l-2 border-red-700 pl-3 text-[10px] font-bold uppercase tracking-[0.16em] text-red-700">Trending now</span>
    <div className="trending-scroll flex min-w-0 gap-6 overflow-x-auto text-xs font-medium text-slate-600" aria-label="Trending stories">
      {articles.slice(0, 4).map((article) => <Link key={article.id} href={articleHref(article)} className="shrink-0 whitespace-nowrap py-1 hover:text-red-700">{article.title}</Link>)}
    </div>
  </Container></div>;
}
