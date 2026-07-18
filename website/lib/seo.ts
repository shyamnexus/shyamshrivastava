import type { Metadata } from "next";
import { site } from "@/config/site";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(
    /\/$/,
    "",
  );
  if (vercelProduction) return `https://${vercelProduction}`;

  const vercelUrl = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercelUrl) return `https://${vercelUrl}`;

  return site.url.replace(/\/$/, "");
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = site.description,
  path = "/",
  type = "website",
  image = "/opengraph-image",
  noIndex = false,
}: CreateMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const defaultTitle = `${site.name} | ${site.title}`;
  const resolvedTitle = title
    ? path === "/"
      ? { absolute: defaultTitle }
      : title
    : undefined;
  const socialTitle = title ? `${title} | ${site.name}` : defaultTitle;

  return {
    title: resolvedTitle,
    description,
    keywords: [...site.keywords],
    authors: [{ name: site.name, url: getSiteUrl() }],
    creator: site.name,
    publisher: site.name,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    url: getSiteUrl(),
    email: site.email,
    sameAs: [site.linkedin, site.github],
    knowsAbout: [...site.keywords],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    description: site.description,
    url: getSiteUrl(),
    publisher: {
      "@type": "Person",
      name: site.name,
    },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
