import Link from "next/link";
import { Container } from "./container";

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
      <circle cx="10.5" cy="10.5" r="6.5" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="relative z-10 border-b border-white/70 bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-red-700 to-amber-500 text-sm font-semibold text-white shadow-lg shadow-red-950/20">
            OF
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Sports news
            </p>
            <p className="text-lg font-semibold text-slate-950">OmegaField</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <SearchIcon />
          </button>
          <Link
            href="/login"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Register
          </Link>
        </div>
      </Container>
    </header>
  );
}