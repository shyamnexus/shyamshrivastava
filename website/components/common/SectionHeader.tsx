import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        isCentered && "mx-auto mb-16 text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "text-4xl font-bold md:text-5xl",
          isCentered && "text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-8 text-slate-400",
            isCentered && "mx-auto",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
