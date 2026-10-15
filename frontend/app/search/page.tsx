import type { Metadata } from "next";
import Form from "next/form";
import { getPublishedArticles } from "@/lib/news";
import { categoryFor } from "@/lib/categories";
import { parsePage } from "@/lib/utils";
import { Container } from "@/components/container";
import { PublicShell } from "@/components/public-shell";
import { NewsListing } from "@/components/news-listing";

export const metadata: Metadata = { title: "Search | OmegaField", description: "Find news, athletes and stories across the OmegaField sports desk." };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string | string[]; page?: string | string[] }> }) {
  const params = await searchParams;
  const query = (Array.isArray(params.q) ? params.q[0] : params.q ?? "").trim().slice(0, 200);
  const terms = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const articles = await getPublishedArticles();
  const results = articles.filter((article) => {
    const text = [article.title, article.shortDescription, article.content, article.author, article.category, categoryFor(article).name].join(" ").toLocaleLowerCase();
    return terms.every((term) => text.includes(term));
  });
  return <PublicShell articles={articles}><Container className="space-y-8 py-9">
    <div className="max-w-2xl"><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-700">Find your next story</p><h1 className="text-4xl font-bold tracking-tight">Search OmegaField</h1>
      <Form action="/search" className="mt-6 flex flex-col gap-3 sm:flex-row"><label htmlFor="news-query" className="sr-only">Search stories</label><input key={query} id="news-query" name="q" type="search" defaultValue={query} maxLength={200} placeholder="Search a sport, athlete or headline" className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-4 py-3 text-base" /><button type="submit" className="rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700">Search</button></Form>
    </div>
    <section className="space-y-5"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-300 pb-4"><h2 className="break-words text-xl font-bold">{query ? `Search results for: “${query}”` : "Browse all stories"}</h2><p className="text-sm text-slate-500">{results.length} {results.length === 1 ? "story" : "stories"}</p></div><NewsListing articles={results} page={parsePage(params.page)} basePath="/search" query={query} /></section>
  </Container></PublicShell>;
}
