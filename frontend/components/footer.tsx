import { Container } from "./container";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200/80 bg-slate-950 text-white">
      <Container className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-200">
            OmegaField
          </p>
          <p className="max-w-sm text-sm leading-6 text-white/70">
            A sports news foundation designed to scale into a production editorial experience.
          </p>
        </div>

        <div className="space-y-3 text-sm text-white/75">
          <p className="font-semibold text-white">About</p>
          <a href="#" className="block transition hover:text-white">
            Our Story
          </a>
          <a href="#" className="block transition hover:text-white">
            Editorial Standards
          </a>
        </div>

        <div className="space-y-3 text-sm text-white/75">
          <p className="font-semibold text-white">Contact</p>
          <a href="#" className="block transition hover:text-white">
            Email Us
          </a>
          <a href="#" className="block transition hover:text-white">
            Advertising
          </a>
        </div>

        <div className="space-y-3 text-sm text-white/75">
          <p className="font-semibold text-white">Social Media</p>
          <a href="#" className="block transition hover:text-white">
            X / Twitter
          </a>
          <a href="#" className="block transition hover:text-white">
            Instagram
          </a>
          <a href="#" className="block transition hover:text-white">
            YouTube
          </a>
          <a href="#" className="block transition hover:text-white">
            LinkedIn
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.24em] text-white/45">
        Privacy Policy
      </div>
    </footer>
  );
}