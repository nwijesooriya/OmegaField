import Link from "next/link";
import { Container, HeroGrid, NewsCard, SectionTitle, Sidebar } from "@/components";
import { PublicShell } from "@/components/public-shell";
import { CategorySection } from "@/components/category-section";
import { AdvertisementSlot } from "@/components/advertisement-slot";
import { categories, categoryFor, formatDate } from "@/lib/categories";
import { advertisementFor } from "@/lib/mock-ads";
import { getPublishedArticles } from "@/lib/news";
import { buildHeroSlots } from "@/lib/hero-layouts";

export default async function Home() {
  const articles = await getPublishedArticles();
  const featured = [...articles.filter((article) => article.featured), ...articles.filter((article) => !article.featured)];
  const lead = featured[0];
  const heroArticles = lead ? [lead, ...categories
    .filter((category) => category.slug !== categoryFor(lead).slug)
    .flatMap((category) => {
      const article = articles.find((item) => categoryFor(item).slug === category.slug);
      return article ? [article] : [];
    })] : [];
  const slots = buildHeroSlots(heroArticles);
  const featuredIds = new Set(slots.map((slot) => slot.article.id));
  const latest = articles.filter((article) => !featuredIds.has(article.id)).slice(0, 6);
  return <PublicShell articles={articles}>
    <Container className="py-7 lg:py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-slate-300 pb-5">
        <div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-red-700">The sports desk</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Every sport. Every story.</h1></div>
        <p className="text-xs text-slate-500">{process.env.NEWS_DATA_SOURCE !== "api" ? "Preview edition · Sample stories" : "Latest coverage"}{articles[0] ? " · " + formatDate(articles[0].publishedDate) : ""}</p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[160px_minmax(0,1fr)_260px]">
        <aside className="hidden space-y-8 xl:block">
          <section><h2 className="mb-4 border-b border-slate-300 pb-3 text-xs font-bold uppercase tracking-widest">Explore sports</h2><div className="space-y-1">{categories.map((category, index) => <Link key={category.slug} href={"/" + category.slug} className="flex items-center gap-3 rounded-md px-2 py-3 text-sm font-semibold text-slate-600 hover:bg-white hover:text-red-700"><span className="text-[10px] text-slate-400">0{index + 1}</span>{category.name}</Link>)}</div></section>
          <section className="border-t border-slate-300 pt-5"><p className="text-xs font-bold uppercase tracking-wider">Beyond the headline</p><p className="mt-3 text-sm leading-6 text-slate-500">The people, places and moments that make sport matter.</p><Link href="/other-sports" className="mt-4 inline-block text-xs font-semibold text-red-700 hover:underline">Discover more →</Link></section>
        </aside>
        <div className="min-w-0 space-y-8">
          <section aria-label="Lead stories"><HeroGrid slots={slots} /></section>
          <section className="space-y-5 border-t border-slate-300 pt-6">
            <div className="flex items-center justify-between"><SectionTitle eyebrow="" title="Latest News" /><Link href="/search" className="text-xs font-semibold text-red-700 hover:underline">Browse all →</Link></div>
            <div className="grid gap-4 sm:grid-cols-2">{latest.map((article) => <NewsCard key={article.id} article={article} />)}</div>
            {!latest.length && <p className="text-sm text-slate-500">More stories are on the way.</p>}
          </section>
        </div>
        <Sidebar trendingArticles={articles.slice(0, 5)} mostReadArticles={featured.slice(4, 7)} />
      </div>
      <div className="mt-9"><AdvertisementSlot advertisement={advertisementFor("homepage-banner")} /></div>
      <div className="mt-9 space-y-9">{categories.map((category) => <CategorySection key={category.slug} category={category} articles={articles} />)}</div>
      <section className="mt-9 flex flex-wrap items-center justify-between gap-4 border-y border-slate-300 py-6"><div><h2 className="font-bold">Stay close to the stories you love.</h2><p className="mt-1 text-sm text-slate-600">Join the OmegaField community.</p></div><Link href="/register" className="rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700">Create an account</Link></section>
    </Container>
  </PublicShell>;
}

