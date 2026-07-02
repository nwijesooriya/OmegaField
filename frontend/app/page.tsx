export const dynamic = "force-dynamic";

import {
  Container,
  Footer,
  Header,
  HeroGrid,
  Navbar,
  NewsCard,
  SectionTitle,
  Sidebar,
} from "@/components";
import { getNewsArticles } from "@/lib/api";
import { buildHeroSlots } from "@/lib/hero-layouts";

const navigationItems = ["Home", "Athletics", "School Sports", "International", "Opinion"];

export default async function Home() {
  const articles = await getNewsArticles();
  const heroSlots = buildHeroSlots(articles, "layoutA");
  const heroArticleIds = new Set(heroSlots.map((slot) => slot.article.id));
  const latestArticles = articles.filter((article) => !heroArticleIds.has(article.id));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(185,28,28,0.12),_transparent_34%),linear-gradient(180deg,#f8f4ee_0%,#efe6d8_55%,#f7f2ea_100%)] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-70" />

      <Header />
      <Navbar items={navigationItems} />

      <Container className="relative space-y-10 py-8 lg:py-12">
        <section className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-10">
            <div className="space-y-5">
              <SectionTitle
                eyebrow="Top Stories"
                title="A modern sports front page built for fast scans and deeper reads"
                description="The hero area is driven by configuration so editorial can swap layouts later without touching the card components."
              />
              <HeroGrid slots={heroSlots} />
            </div>

            <div className="space-y-5">
              <SectionTitle
                eyebrow="Latest News"
                title="Fresh headlines across the sports desk"
                description="Cards are powered by the backend mock API and keep the content layer separate from presentation."
              />

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {latestArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>

          <Sidebar
            trendingArticles={articles.slice(0, 4)}
            mostReadArticles={articles.slice(4, 8)}
          />
        </section>
      </Container>

      <Footer />
    </main>
  );
}

