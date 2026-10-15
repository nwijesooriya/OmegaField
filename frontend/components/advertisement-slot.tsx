import Image from "next/image";
import type { Advertisement } from "@/types/news";
import { cn } from "@/lib/utils";

export function AdvertisementSlot({ advertisement }: { advertisement?: Advertisement }) {
  if (!advertisement?.active) return null;
  const banner = advertisement.placement.endsWith("banner");
  const content = advertisement.image ? <div className={cn("relative w-full", banner ? "aspect-[4/1]" : "aspect-[6/5]")}><Image src={advertisement.image} alt={advertisement.title} fill sizes={banner ? "100vw" : "320px"} className="object-cover" unoptimized /></div> : <div className={cn("flex flex-col justify-center bg-slate-950 p-6 text-white", banner ? "min-h-32 sm:flex-row sm:items-center sm:justify-between sm:gap-8" : "min-h-60")}>
    <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">OmegaField partners</p><p className="max-w-md text-xl font-bold leading-tight">{advertisement.title}</p></div>
    <span className="mt-5 text-xs text-slate-400">Advertising enquiries welcome</span>
  </div>;
  return <aside aria-label="Advertisement" data-placement={advertisement.placement} className="overflow-hidden rounded-lg border border-slate-200">
    <p className="bg-white px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-slate-500">Advertisement · {advertisement.image ? "Sponsored" : "Available space"}</p>
    {advertisement.targetUrl ? <a href={advertisement.targetUrl} target="_blank" rel="sponsored noopener noreferrer">{content}</a> : content}
  </aside>;
}
