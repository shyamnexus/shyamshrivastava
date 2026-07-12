import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}