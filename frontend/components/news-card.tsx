import Image from "next/image";

import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/types/news";

type NewsCardProps = {
  article: NewsArticle;
  className?: string;
};

export function NewsCard({ article, className }: NewsCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/88 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          <span className="rounded-full bg-slate-950 px-3 py-1 text-white">{article.category}</span>
          <time dateTime={article.publishedDate}>
            {new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }).format(new Date(article.publishedDate))}
          </time>
        </div>

        <h3 className="text-lg font-semibold leading-snug text-slate-950">
          {article.title}
        </h3>
        <p className="text-sm leading-6 text-slate-600">{article.shortDescription}</p>
      </div>
    </article>
  );
}