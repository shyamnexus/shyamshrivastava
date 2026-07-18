import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { site } from "@/config/site";
import { GitHubIcon, LinkedInIcon } from "@/components/common/SocialIcons";

const navLinks = [
  { name: "Journey", href: "/#journey" },
  { name: "Projects", href: "/#projects" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Contact", href: "/#contact" },
  { name: "Playbook", href: "/playbook" },
  { name: "Resume", href: "/resume" },
] as const;

const socialLinks = [
  {
    name: "LinkedIn",
    href: site.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: site.github,
    icon: GitHubIcon,
  },
  {
    name: "Email",
    href: `mailto:${site.email}`,
    icon: Mail,
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-wide text-white transition hover:text-blue-400 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Shyam<span className="text-blue-500">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              {site.title} building secure, scalable embedded products and
              high-performing engineering teams.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 sm:grid-cols-1">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-slate-400 transition hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Connect
            </p>
            <ul className="mt-4 flex flex-col">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": `${name} (opens in a new tab)`,
                        }
                      : { "aria-label": name })}
                    className="inline-flex min-h-11 items-center gap-3 text-sm text-slate-400 transition hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <Icon className="size-4 shrink-0" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-center text-sm text-slate-400 sm:text-left">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <p>Built with Next.js</p>
          </div>

          <a
            href="#top"
            className="inline-flex items-center justify-center gap-2 self-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:self-auto"
          >
            <ArrowUp aria-hidden="true" className="size-4" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
