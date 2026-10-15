import Link from "next/link";
import { categories } from "@/lib/categories";
import { Container } from "./container";

export function Footer() {
  return <footer className="mt-12 border-t border-slate-800 bg-slate-950 text-white">
    <Container className="grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
      <div><Link href="/" className="text-xl font-bold">OmegaField<span className="text-red-500">.</span></Link><p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">The stories behind the sport. From local grounds to the international stage.</p></div>
      <div><h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-300">Sports</h2><div className="space-y-2">{categories.map((category) => <Link key={category.slug} href={"/" + category.slug} className="block text-sm text-slate-400 hover:text-white">{category.name}</Link>)}</div></div>
      <div><h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-300">OmegaField</h2><div className="space-y-2">{["About", "Contact", "Privacy", "Terms"].map((item) => <Link key={item} href={"/" + item.toLowerCase()} className="block text-sm text-slate-400 hover:text-white">{item}</Link>)}</div></div>
      <div><h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-300">Follow the story</h2><p className="text-sm leading-6 text-slate-400">Our official social channels will be announced here.</p><Link href="/search" className="mt-3 inline-block text-sm text-white hover:underline">Explore the news →</Link></div>
    </Container>
    <Container className="border-t border-white/10 py-4 text-xs text-slate-400">© {new Intl.DateTimeFormat("en", { year: "numeric", timeZone: "Asia/Colombo" }).format(new Date())} OmegaField. All rights reserved.</Container>
  </footer>;
}
