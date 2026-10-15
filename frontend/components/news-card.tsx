import Image from "next/image";
import Link from "next/link";
import { articleHref, categoryFor, formatDate } from "@/lib/categories";

import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/types/news";

type NewsCardProps = {
  article: NewsArticle;
  className?: string;
};

export function NewsCard({ article, className }: NewsCardProps) {
  return (
    <Link
      href={articleHref(article)}
      className={cn(
        "group block overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors hover:border-slate-400",
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

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          <span className="font-bold text-red-700">{categoryFor(article).name}</span>
          <time dateTime={article.publishedDate}>
            {formatDate(article.publishedDate)}
          </time>
        </div>

        <h3 className="text-lg font-bold leading-snug text-slate-950 group-hover:text-red-700">
          {article.title}
        </h3>
        <p className="text-sm leading-6 text-slate-600">{article.shortDescription}</p>
        <p className="text-xs text-slate-500">By {article.author}</p>
      </div>
    </Link>
  );
}
