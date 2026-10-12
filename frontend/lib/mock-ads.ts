import type { Advertisement, AdPlacement } from "@/types/news";

export const mockAdvertisements: Advertisement[] = [
  { id: "home-side", title: "Your brand. Their next big moment.", placement: "homepage-sidebar", active: true },
  { id: "home-break", title: "Be part of the sporting conversation.", placement: "homepage-banner", active: true },
  { id: "category-side", title: "Reach fans who follow every story.", placement: "category-sidebar", active: true },
  { id: "article-break", title: "A space for brands that champion sport.", placement: "article-banner", active: true },
];

export function advertisementFor(placement: AdPlacement, now = Date.now()): Advertisement | undefined {
  return mockAdvertisements.find((advertisement) => advertisement.placement === placement && advertisement.active
    && (!advertisement.startDate || now >= Date.parse(advertisement.startDate))
    && (!advertisement.endDate || now < Date.parse(advertisement.endDate)));
}
