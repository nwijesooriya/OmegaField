import Link from "next/link";
import { articleHref, categoryFor } from "@/lib/categories";
import { advertisementFor } from "@/lib/mock-ads";
import type { NewsArticle, AdPlacement } from "@/types/news";
import { cn } from "@/lib/utils";
import { AdvertisementSlot } from "./advertisement-slot";

export function Sidebar({ trendingArticles, mostReadArticles = [], className, placement = "homepage-sidebar" }: {
  trendingArticles: NewsArticle[]; mostReadArticles?: NewsArticle[]; className?: string; placement?: AdPlacement;
}) {
  return <aside className={cn("space-y-6", className)}>
    {[{ title: "Top Headlines", articles: trendingArticles }, { title: "Editor's Picks", articles: mostReadArticles }].filter((section) => section.articles.length).map((section) =>
      <section key={section.title} className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="border-b-2 border-red-700 pb-3 text-sm font-bold uppercase tracking-wide">{section.title}</h2>
        <ol className="divide-y divide-slate-100">
          {section.articles.map((article, index) => <li key={article.id} className="py-4">
            <Link href={articleHref(article)} className="group flex gap-3">
              <span className="text-xl font-bold tabular-nums text-slate-300">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-700">{categoryFor(article).name}</p><h3 className="text-sm font-semibold leading-relaxed group-hover:text-red-700">{article.title}</h3></div>
            </Link>
          </li>)}
        </ol>
      </section>
    )}
    <AdvertisementSlot advertisement={advertisementFor(placement)} />
  </aside>;
}
