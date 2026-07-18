import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const maxWidthClasses = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

const spacingClasses = {
  sm: "py-10",
  md: "py-20",
  lg: "py-24",
  xl: "py-28",
  none: "",
} as const;

type MaxWidth = keyof typeof maxWidthClasses;
type Spacing = keyof typeof spacingClasses;
type Border = boolean | "top" | "y" | "none";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  maxWidth?: MaxWidth;
  spacing?: Spacing;
  bordered?: Border;
}

export default function Section({
  children,
  id,
  className,
  containerClassName,
  maxWidth = "7xl",
  spacing = "lg",
  bordered = "top",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingClasses[spacing],
        (bordered === true || bordered === "top") && "border-t border-slate-800",
        bordered === "y" && "border-y border-slate-800",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto px-6",
          maxWidthClasses[maxWidth],
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
