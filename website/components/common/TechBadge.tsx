import { cn } from "@/lib/utils";

interface TechBadgeProps {
  text: string;
  variant?: "outline" | "muted";
  className?: string;
}

export default function TechBadge({
  text,
  variant = "outline",
  className,
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full text-sm",
        variant === "outline" &&
          "border border-blue-500 px-4 py-2 text-blue-300 transition hover:bg-blue-600 hover:text-white",
        variant === "muted" &&
          "bg-slate-800 px-3 py-1 text-slate-300",
        className,
      )}
    >
      {text}
    </span>
  );
}
