import Link from "next/link";

interface ProjectCardProps {
  title: string;
  company: string;
  description: string;
  href: string;
}

export default function ProjectCard({
  title,
  company,
  description,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:-translate-y-1">
        <p className="text-blue-400 text-sm">{company}</p>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-slate-400">
          {description}
        </p>

        <p className="mt-6 text-blue-400 group-hover:translate-x-1 transition">
          View Project →
        </p>
      </div>
    </Link>
  );
}