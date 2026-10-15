import Link from "next/link";
import { NewsCard } from "./news-card";
import type { NewsArticle } from "@/types/news";

export function NewsListing({ articles, page, basePath, query }: { articles: NewsArticle[]; page: number; basePath: string; query?: string }) {
  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(articles.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), pageCount);
  const visible = articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const href = (number: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (number > 1) params.set("page", String(number));
    return basePath + (params.size ? "?" + params.toString() : "");
  };
  return <div className="space-y-7">
    {visible.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map((article) => <NewsCard key={article.id} article={article} />)}</div> : <div className="rounded-lg border border-slate-200 bg-white p-8"><h2 className="font-bold">No stories found</h2><p className="mt-2 text-sm text-slate-500">Try another search or explore a different sport.</p><Link href="/" className="mt-4 inline-block text-sm font-semibold text-red-700 hover:underline">Back to the homepage</Link></div>}
    {pageCount > 1 && <nav aria-label="News pagination" className="flex flex-wrap items-center justify-center gap-2">
      {currentPage > 1 && <Link href={href(currentPage - 1)} className="rounded border border-slate-300 px-3 py-2 text-sm hover:bg-white">Previous</Link>}
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <Link key={number} href={href(number)} aria-label={`Page ${number}`} aria-current={number === currentPage ? "page" : undefined} className={`rounded border px-3 py-2 text-sm ${number === currentPage ? "border-slate-950 bg-slate-950 text-white" : "border-slate-300 hover:bg-white"}`}>{number}</Link>)}
      {currentPage < pageCount && <Link href={href(currentPage + 1)} className="rounded border border-slate-300 px-3 py-2 text-sm hover:bg-white">Next</Link>}
    </nav>}
  </div>;
}
