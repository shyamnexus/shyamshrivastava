import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const maxWidthClasses = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

type MaxWidth = keyof typeof maxWidthClasses;

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  maxWidth?: MaxWidth;
  bordered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  maxWidth = "7xl",
  bordered = true,
  titleClassName,
  subtitleClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(bordered && "border-b border-slate-800", className)}
    >
      <div
        className={cn(
          "mx-auto px-6 py-20",
          maxWidthClasses[maxWidth],
          containerClassName,
        )}
      >
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            {eyebrow}
          </p>
        )}

        <h1
          className={cn(
            "mt-4 text-4xl font-bold md:text-5xl lg:text-6xl",
            titleClassName,
          )}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={cn(
              "mt-6 max-w-3xl text-xl leading-8 text-slate-300",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
