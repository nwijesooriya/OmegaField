import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, categoryFor } from "@/lib/categories";
import { getPublishedArticles } from "@/lib/news";
import { parsePage } from "@/lib/utils";
import { Container } from "@/components/container";
import { FeaturedCard } from "@/components/featured-card";
import { NewsListing } from "@/components/news-listing";
import { PublicShell } from "@/components/public-shell";
import { Sidebar } from "@/components/sidebar";

const information: Record<string, { title: string; text: string }> = {
  about: { title: "About OmegaField", text: "OmegaField brings together stories from cricket, football, rugby, athletics and the wider sporting world. Our aim is to put athletes, communities and thoughtful coverage at the centre of the conversation. This preview edition contains sample stories and illustrations." },
  contact: { title: "Contact", text: "Have a story idea, an editorial question or an advertising enquiry? Our contact channels are being prepared and will be published here before launch." },
  privacy: { title: "Privacy", text: "The full privacy notice is being prepared for launch. In this development preview, signing in stores a session token in your browser. Account data is held temporarily by the development server. Please use test details while exploring the preview." },
  terms: { title: "Terms", text: "This is a development preview of OmegaField. Stories, illustrations and advertisement spaces are sample content. Publication terms and editorial policies will be available before the public launch." },
};

type Props = { params: Promise<{ category: string }>; searchParams: Promise<{ page?: string | string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  return { title: `${category?.name ?? information[slug]?.title ?? "Not found"} | OmegaField`, description: category?.description };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category: slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const info = Object.hasOwn(information, slug) ? information[slug] : undefined;
  if (!category && !info) notFound();
  const articles = await getPublishedArticles();
  if (info) return <PublicShell articles={articles}><Container className="py-12"><article className="mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-6 sm:p-10"><h1 className="text-3xl font-bold">{info.title}</h1><p className="mt-6 text-base leading-8 text-slate-600">{info.text}</p><Link href="/" className="mt-8 inline-block text-sm font-semibold text-red-700 hover:underline">Back to the news →</Link></article></Container></PublicShell>;
  const stories = articles.filter((article) => categoryFor(article).slug === slug);
  const page = parsePage((await searchParams).page);
  return <PublicShell articles={articles}><Container className="space-y-7 py-9">
    <div className="max-w-3xl"><p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-700">The sports desk</p><h1 className="text-4xl font-bold tracking-tight">{category!.name}</h1><p className="mt-4 text-base leading-7 text-slate-600">{category!.description}</p></div>
    <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0 space-y-8">
        {page === 1 && stories[0] && <section aria-label="Latest story"><FeaturedCard article={stories[0]} variant="featured" /></section>}
        <section className="space-y-5"><h2 className="border-b border-slate-300 pb-3 text-xl font-bold">All {category!.name} stories</h2><NewsListing articles={stories} page={page} basePath={`/${slug}`} /></section>
      </div>
      <Sidebar trendingArticles={stories.slice(0, 5)} placement="category-sidebar" />
    </div>
  </Container></PublicShell>;
}
