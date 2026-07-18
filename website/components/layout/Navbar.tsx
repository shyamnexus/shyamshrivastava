"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ButtonLink from "@/components/common/ButtonLink";

const links = [
  { name: "Journey", href: "/#journey" },
  { name: "Projects", href: "/#projects" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Contact", href: "/#contact" },
  { name: "Playbook", href: "/playbook" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          aria-label="Shyam Shrivastava — Home"
          className="rounded-sm text-xl font-bold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setOpen(false)}
        >
          Shyam<span className="text-blue-500">.</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/resume"
            className="hidden min-h-11 rounded-full bg-blue-600 px-5 text-white hover:bg-blue-700 sm:inline-flex"
          >
            Resume
          </ButtonLink>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-700 text-slate-200 transition hover:border-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center rounded-lg px-3 text-slate-200 transition hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume"
                  className="mt-2 flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-3 font-medium text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
