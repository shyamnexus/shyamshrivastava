import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-clip-padding text-sm font-medium outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline:
          "border-slate-700 bg-transparent text-slate-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white",
        secondary:
          "bg-slate-800 text-slate-100 hover:bg-slate-700",
        ghost: "text-slate-200 hover:bg-slate-800 hover:text-white",
        destructive:
          "bg-red-950/50 text-red-300 hover:bg-red-950 focus-visible:border-red-500 focus-visible:ring-red-500/20",
        link: "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 gap-1.5 px-2.5",
        xs: "h-6 gap-1 px-2 text-xs",
        sm: "h-7 gap-1 px-2.5 text-[0.8rem]",
        lg: "h-9 gap-1.5 px-2.5",
        icon: "size-8",
        "icon-xs": "size-6",
        "icon-sm": "size-7",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
