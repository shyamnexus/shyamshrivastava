import Link from "next/link";
import { Mail, FileText } from "lucide-react";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { GitHubIcon, LinkedInIcon } from "@/components/common/SocialIcons";
import { buttonVariants } from "@/components/ui/button-variants";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const secondaryLinks = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: site.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "Resume",
    href: site.resumePath,
    icon: FileText,
    external: false,
  },
] as const;

const secondaryLinkClassName = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-11 gap-2 rounded-xl border-slate-700 bg-transparent px-5 text-slate-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white",
);

export default function Contact() {
  return (
    <Section id="contact" spacing="xl" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <SectionHeader
          align="center"
          eyebrow="Contact"
          title="Let's build the next product together"
          subtitle="Open to engineering leadership conversations, embedded platform architecture, and product development collaborations."
          className="mb-12"
          titleClassName="text-4xl text-white md:text-5xl"
        />

        <div className="flex flex-col items-center gap-8">
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name} at ${site.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 min-w-[min(100%,20rem)] gap-3 rounded-xl bg-blue-600 px-8 text-base text-white hover:bg-blue-700 focus-visible:ring-blue-500/50",
            )}
          >
            <Mail aria-hidden="true" className="size-5" />
            Email Me
          </a>

          <p className="text-sm text-slate-400">
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-blue-400 underline-offset-4 transition hover:text-blue-300 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {site.email}
            </a>
          </p>

          <nav aria-label="Social and resume links">
            <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {secondaryLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} (opens in a new tab)`}
                      className={secondaryLinkClassName}
                    >
                      <Icon className="size-4" />
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      aria-label={`View ${label}`}
                      className={secondaryLinkClassName}
                    >
                      <Icon className="size-4" />
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Section>
  );
}
