import ButtonLink from "@/components/common/ButtonLink";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";

interface ComingSoonPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  backHref: string;
  backLabel: string;
}

export default function ComingSoonPage({
  eyebrow,
  title,
  subtitle,
  backHref,
  backLabel,
}: ComingSoonPageProps) {
  return (
    <main id="main-content">
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <ButtonLink
          href={backHref}
          variant="outline"
          className="min-h-11 px-5"
        >
          {backLabel}
        </ButtonLink>
      </PageHero>

      <Section bordered={false} spacing="md" className="pt-0">
        <p className="text-slate-400">
          This page is under construction. Check back soon for the full write-up.
        </p>
      </Section>
    </main>
  );
}
