interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 uppercase tracking-[0.35em] text-blue-400 text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg text-slate-400 leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}