"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Shyam<span className="text-blue-500">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button className="rounded-full">
          Resume
        </Button>
      </div>
    </header>
  );
}