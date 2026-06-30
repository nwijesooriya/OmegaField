const pillars = [
  {
    title: "Frontend",
    description: "Next.js App Router with TypeScript and Tailwind CSS.",
  },
  {
    title: "Backend",
    description: "Express API foundation with clean route and middleware layers.",
  },
  {
    title: "Database",
    description: "MongoDB is reserved for the next phase of the build.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_38%),linear-gradient(180deg,#f7f4ee_0%,#efe8db_100%)] text-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            Foundation ready for the first commit
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              OmegaField
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              A clean, production-minded starting point for the platform.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              The repository now has a structured frontend, an Express backend,
              and the baseline configuration needed to keep the first commit
              tidy and maintainable.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-900/10 bg-white/75 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <h2 className="text-lg font-semibold text-slate-950">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

