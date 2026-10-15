"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/categories";
import { cn } from "@/lib/utils";

export function Navbar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary navigation" className="flex flex-col gap-1 xl:flex-row xl:items-center">
      {[{ name: "Home", slug: "" }, ...categories].map((item) => {
        const href = "/" + item.slug;
        const active = pathname === href;
        return <Link key={href} href={href} onClick={onNavigate} aria-current={active ? "page" : undefined}
          className={cn("whitespace-nowrap rounded-md px-3 py-2.5 text-sm font-semibold transition-colors", active ? "bg-red-50 text-red-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950")}>{item.name}</Link>;
      })}
    </nav>
  );
}
