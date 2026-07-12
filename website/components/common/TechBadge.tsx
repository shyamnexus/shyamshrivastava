interface TechBadgeProps {
  text: string;
}

export default function TechBadge({ text }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-600 hover:text-white">
      {text}
    </span>
  );
}