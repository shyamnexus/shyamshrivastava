import Link from "next/link";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import TechBadge from "@/components/common/TechBadge";
import { products } from "@/data/product";

export default function Products() {
  return (
    <Section id="projects" bordered={false} spacing="xl">
      <SectionHeader
        align="center"
        title="Featured Products"
        subtitle="Products and platforms I've architected, developed, or led throughout my engineering career."
        className="mb-16"
        titleClassName="mb-4 text-5xl"
        subtitleClassName="mt-0"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const content = (
            <>
              <div aria-hidden="true" className="text-5xl">
                {product.emoji}
              </div>

              <h3 className="mt-4 text-2xl font-bold">{product.title}</h3>

              <p className="mt-2 text-blue-400">{product.company}</p>

              <p className="mt-4 text-slate-400">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.technologies.map((tech) => (
                  <TechBadge key={tech} text={tech} variant="muted" />
                ))}
              </div>
            </>
          );

          return (
            <article
              key={product.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-blue-500 focus-within:border-blue-500"
            >
              {product.href ? (
                <Link
                  href={product.href}
                  className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
