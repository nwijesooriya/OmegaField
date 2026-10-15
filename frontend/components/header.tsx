"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu, Search, X } from "lucide-react";
import { Container } from "./container";
import { Navbar } from "./navbar";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { user, loading, logout } = useAuth();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileOpen = openPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const accountLinks = loading ? <span className="text-xs text-slate-500">Loading account…</span> : !user ? <>
    <Link href="/login" className="px-2 py-2 text-sm font-semibold text-slate-700 hover:text-red-700">Login</Link>
    <Link href="/register" className="rounded-md bg-slate-950 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700">Register</Link>
  </> : <details className="relative">
    <summary className="max-w-36 cursor-pointer truncate rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold">{user.username}</summary>
    <div className="absolute right-0 z-40 mt-2 w-52 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
      <Link href="/profile" className="block rounded px-3 py-2 text-sm hover:bg-slate-50">My profile</Link>
      <Link href="/user/dashboard" className="block rounded px-3 py-2 text-sm hover:bg-slate-50">User dashboard</Link>
      {user.role === "ADMIN" && <Link href="/admin/dashboard" className="block rounded px-3 py-2 text-sm text-red-700 hover:bg-red-50">Admin dashboard</Link>}
      <button onClick={() => void logout()} className="flex w-full items-center gap-2 rounded px-3 py-2 text-sm text-red-700 hover:bg-red-50"><LogOut size={15} aria-hidden="true" /> Log out</button>
    </div>
  </details>;

  return <header className="relative z-30 border-b border-slate-200 bg-white">
    <Container className="flex min-h-20 items-center justify-between gap-4 py-3">
      <Link href="/" aria-label="OmegaField home" className="flex shrink-0 items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-950 via-red-700 to-amber-500 text-sm font-bold text-white">OF</span>
        <span><span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Sports news</span><span className="block text-lg font-bold tracking-tight">OmegaField</span></span>
      </Link>
      <div className="hidden xl:block"><Navbar /></div>
      <div className="flex items-center gap-2">
        <Link href="/search" aria-label="Search news" className="rounded-md p-2.5 text-slate-600 hover:bg-slate-100"><Search size={20} aria-hidden="true" /></Link>
        <div className="hidden items-center gap-2 md:flex">{accountLinks}</div>
        <button ref={toggleRef} type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setOpenPath(mobileOpen ? null : pathname)} className="rounded-md p-2.5 hover:bg-slate-100 xl:hidden">
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
    </Container>
    <div id="mobile-navigation" hidden={!mobileOpen} className="border-t border-slate-100 bg-white xl:hidden">
      <Container className="py-4"><Navbar onNavigate={() => setOpenPath(null)} /><div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-4 md:hidden">{accountLinks}</div></Container>
    </div>
  </header>;
}
