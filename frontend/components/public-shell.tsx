import type { ReactNode } from "react";
import type { NewsArticle } from "@/types/news";
import { Header } from "./header";
import { Footer } from "./footer";
import { TrendingBar } from "./trending-bar";

export function PublicShell({ children, articles }: { children: ReactNode; articles: NewsArticle[] }) {
  return <div className="min-h-screen bg-[#f4efe7] text-slate-950">
    <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-slate-950 px-4 py-3 text-white focus:translate-y-0">Skip to content</a>
    <Header /><TrendingBar articles={articles} />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
  </div>;
}
