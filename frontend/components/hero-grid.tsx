import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/types/news";

import { FeaturedCard, type HeroCardVariant } from "./featured-card";

export type HeroGridSlot = {
  article: NewsArticle;
  variant: HeroCardVariant;
  className: string;
};

type HeroGridProps = {
  slots: HeroGridSlot[];
  className?: string;
};

export function HeroGrid({ slots, className }: HeroGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 lg:grid-cols-4 lg:auto-rows-[minmax(180px,_auto)]",
        className,
      )}
    >
      {slots.map((slot) => (
        <FeaturedCard
          key={slot.article.id}
          article={slot.article}
          variant={slot.variant}
          className={slot.className}
        />
      ))}
    </div>
  );
}