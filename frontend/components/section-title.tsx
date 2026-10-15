import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
        {eyebrow}
      </p>}
      <h2 className="max-w-3xl text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
