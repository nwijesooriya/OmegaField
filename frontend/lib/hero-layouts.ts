import type { HeroGridSlot } from "@/components/hero-grid";
import type { NewsArticle } from "@/types/news";

type HeroLayoutName = "layoutA" | "layoutB" | "layoutC";

type HeroPresetItem = {
  index: number;
  variant: HeroGridSlot["variant"];
  className: string;
};

const heroLayoutPresets: Record<HeroLayoutName, HeroPresetItem[]> = {
  layoutA: [
    { index: 0, variant: "featured", className: "lg:col-span-2 lg:row-span-2" },
    { index: 1, variant: "stacked", className: "lg:col-span-2" },
    { index: 2, variant: "stacked", className: "lg:col-span-2" },
  ],
  layoutB: [
    { index: 1, variant: "compact", className: "lg:col-span-1" },
    { index: 0, variant: "featured", className: "lg:col-span-2 lg:row-span-2" },
    { index: 2, variant: "compact", className: "lg:col-span-1" },
    { index: 3, variant: "stacked", className: "lg:col-span-1 lg:col-start-2" },
  ],
  layoutC: [
    { index: 0, variant: "featured", className: "lg:col-span-4" },
    { index: 1, variant: "compact", className: "lg:col-span-1" },
    { index: 2, variant: "compact", className: "lg:col-span-1" },
    { index: 3, variant: "compact", className: "lg:col-span-1" },
    { index: 4, variant: "compact", className: "lg:col-span-1" },
  ],
};

export function buildHeroSlots(
  articles: NewsArticle[],
  layout: HeroLayoutName = "layoutA",
): HeroGridSlot[] {
  return heroLayoutPresets[layout]
    .map((slot) => {
      const article = articles[slot.index];

      if (!article) {
        return null;
      }

      return {
        article,
        variant: slot.variant,
        className: slot.className,
      };
    })
    .filter((slot): slot is HeroGridSlot => Boolean(slot));
}