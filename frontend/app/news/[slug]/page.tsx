import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getPublishedArticles } from "@/lib/news";
import { categoryFor, formatDate } from "@/lib/categories";
import { advertisementFor } from "@/lib/mock-ads";
import { PublicShell } from "@/components/public-shell";
import { Container } from "@/components/container";
import { NewsCard } from "@/components/news-card";
import { AdvertisementSlot } from "@/components/advertisement-slot";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug((await params).slug);
  return { title: article ? `${article.title} | OmegaField` : "Story not found | OmegaField", description: article?.shortDescription };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug((await params).slug);
  if (!article) notFound();
  const articles = await getPublishedArticles();
  const category = categoryFor(article);
  const related = articles.filter((item) => item.id !== article.id && categoryFor(item).slug === category.slug).slice(0, 3);
  return <PublicShell articles={articles}><Container className="py-8 sm:py-12">
    <article className="mx-auto max-w-4xl">
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-xs text-slate-500"><Link href="/" className="hover:text-red-700">Home</Link><span aria-hidden="true">/</span><Link href={`/${category.slug}`} className="font-semibold text-red-700 hover:underline">{category.name}</Link></nav>
      <header className="max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-700">{category.name}</p><h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{article.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{article.shortDescription}</p><div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-y border-slate-300 py-4 text-sm text-slate-500"><span className="font-semibold text-slate-800">By {article.author}</span><time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time></div></header>
      <figure className="my-8"><div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-slate-200"><Image src={article.image} alt={article.title} fill preload unoptimized sizes="(max-width: 896px) 100vw, 896px" className="object-cover" /></div><figcaption className="mt-3 text-xs text-slate-500">{article.author} · {process.env.NEWS_DATA_SOURCE !== "api" ? "Sample illustration" : category.name}</figcaption></figure>
      <div className="mx-auto max-w-2xl space-y-6 text-lg leading-9 text-slate-800">{article.content.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      <div className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-between gap-3 border-y border-slate-300 py-4"><p className="text-xs text-slate-500">Share tools are coming soon.</p><Link href={`/${category.slug}`} className="text-sm font-semibold text-red-700 hover:underline">More {category.name} →</Link></div>
      <div className="my-9"><AdvertisementSlot advertisement={advertisementFor("article-banner")} /></div>
      {related.length > 0 && <section className="space-y-5 border-t border-slate-300 pt-7"><h2 className="text-2xl font-bold">Related stories</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <NewsCard key={item.id} article={item} />)}</div></section>}
    </article>
  </Container></PublicShell>;
}
