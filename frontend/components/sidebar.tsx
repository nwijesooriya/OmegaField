import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/types/news";

import { SectionTitle } from "./section-title";

type SidebarProps = {
  trendingArticles: NewsArticle[];
  mostReadArticles: NewsArticle[];
  className?: string;
};

function SidebarList({
  title,
  items,
}: {
  title: string;
  items: NewsArticle[];
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/88 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <SectionTitle eyebrow="" title={title} className="space-y-1" />
      <div className="mt-4 space-y-4">
        {items.map((article, index) => (
          <article key={article.id} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
              {index + 1}
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold leading-snug text-slate-950">
                {article.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {article.category} · {article.author}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Sidebar({ trendingArticles, mostReadArticles, className }: SidebarProps) {
  return (
    <aside className={cn("space-y-5", className)}>
      <SidebarList title="Trending News" items={trendingArticles} />
      <SidebarList title="Most Read" items={mostReadArticles} />

      <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 p-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-200">
          Advertisement
        </p>
        <div className="mt-4 space-y-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
          <p className="text-lg font-semibold">Reserve this space for sponsors</p>
          <p className="text-sm leading-6 text-white/75">
            The slot is intentionally simple so ad inventory can be swapped in later without changing the layout.
          </p>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/88 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <SectionTitle eyebrow="" title="Upcoming Matches" className="space-y-1" />
        <div className="mt-4 space-y-3">
          {[
            { teams: "Harbor City vs Metro United", time: "Today · 6:30 PM" },
            { teams: "Westside XI vs River Rangers", time: "Tomorrow · 7:00 PM" },
            { teams: "Regional Cup Semifinal", time: "Sunday · 4:15 PM" },
          ].map((match) => (
            <div
              key={match.teams}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-sm font-semibold text-slate-950">{match.teams}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                {match.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}