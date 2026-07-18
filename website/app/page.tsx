import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Products from "@/components/sections/Products";
import Leadership from "@/components/sections/Leadership";
import CompanyLogos from "@/components/sections/CompanyLogos";
import Contact from "@/components/sections/Contact";
import { createMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata: Metadata = createMetadata({
  path: "/",
  description: site.description,
  type: "profile",
});

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <CompanyLogos />
      <Journey />
      <Products />
      <Leadership />
      <Contact />
    </main>
  );
}
