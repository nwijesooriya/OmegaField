import { Container } from "./container";

type NavbarProps = {
  items: string[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <div className="sticky top-0 z-20 border-b border-slate-200/70 bg-slate-950/95 text-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur">
      <Container>
        <nav className="flex items-center gap-2 overflow-x-auto py-3 text-sm font-medium sm:gap-3">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="whitespace-nowrap rounded-full px-4 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}