import Image from "next/image";
import Link from "next/link";
import { articleHref, categoryFor, formatDate } from "@/lib/categories";

import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/types/news";

export type HeroCardVariant = "featured" | "stacked" | "compact";

type FeaturedCardProps = {
  article: NewsArticle;
  variant?: HeroCardVariant;
  className?: string;
};

const variantStyles: Record<HeroCardVariant, { wrapper: string; title: string; copy: string }> = {
  featured: {
    wrapper: "min-h-[440px]",
    title: "text-3xl sm:text-4xl",
    copy: "text-base",
  },
  stacked: {
    wrapper: "min-h-[220px]",
    title: "text-lg",
    copy: "text-sm",
  },
  compact: {
    wrapper: "min-h-[180px]",
    title: "text-xl",
    copy: "text-sm",
  },
};

export function FeaturedCard({ article, variant = "stacked", className }: FeaturedCardProps) {
  const styles = variantStyles[variant];

  return (
    <Link
      href={articleHref(article)}
      className={cn(
        "group relative flex overflow-hidden rounded-lg bg-slate-950",
        styles.wrapper,
        className,
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          preload={variant === "featured"}
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 1280px) 100vw, 50vw"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.28)_38%,rgba(15,23,42,0.84)_100%)]" />

      <div className="relative flex h-full flex-col justify-end gap-3 p-5 text-white sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85">
          <span className="rounded bg-white/15 px-3 py-1">{categoryFor(article).name}</span>
          {article.featured ? <span className="rounded-full bg-red-500/90 px-3 py-1">Featured</span> : null}
        </div>
        <div className="space-y-2">
          <h3 className={cn("font-bold leading-tight text-white group-hover:underline decoration-white/50 underline-offset-4", styles.title)}>
            {article.title}
          </h3>
          <p className={cn("max-w-2xl text-white/82", styles.copy)}>
            {article.shortDescription}
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm text-white/78">
          <span>{article.author}</span>
          <span className="h-1 w-1 rounded-full bg-white/50" />
          <time dateTime={article.publishedDate}>
            {formatDate(article.publishedDate)}
          </time>
        </div>
      </div>
    </Link>
  );
}
