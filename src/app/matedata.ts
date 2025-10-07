import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ech0.soopy.cn"),
  title: {
    default: "Ech0 - Next-Generation Open Source Federated Publishing Platform",
    template: "%s | Ech0",
  },
  description:
    "Ech0 is a next-generation open-source, self-hosted, lightweight federated publishing platform focused on personal idea sharing. Build your own network of thoughts — fast, private, and fully under your control.",
  keywords: [
    "Ech0",
    "useEch0",
    "open source",
    "self-hosted",
    "ActivityPub",
    "federated",
    "publishing",
    "markdown",
    "notes",
    "personal blog",
    "privacy",
    "AGPL-3.0",
  ],
  authors: [{ name: "L1nSn0w", url: "https://github.com/lin-snow" }],
  creator: "L1nSn0w",
  publisher: "Ech0 Project",

  openGraph: {
    title: "Ech0 - Open Source, Self-Hosted Federated Publishing Platform",
    description:
      "Ech0 is an ultra-lightweight, self-hosted, open-source publishing system that supports ActivityPub federation, Markdown writing, and complete data ownership.",
    url: "https://ech0.soopy.cn",
    siteName: "Ech0",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ech0 Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ech0 - Federated Publishing Platform for Creative Minds",
    description:
      "Ech0 is an open-source, self-hosted, lightweight platform for publishing, sharing, and connecting ideas. Powered by ActivityPub.",
    images: ["/og-image.png"],
    creator: "@useEch0",
  },

  alternates: {
    canonical: "https://ech0.soopy.cn",
    languages: {
      en: "https://useech0.com/en",
      zh: "https://useech0.com/zh",
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  category: "Software",
  applicationName: "Ech0",

  other: {
    "theme-color": "#0f172a",
    "msapplication-TileColor": "#0f172a",
    "og:release": "v1.0.0",
    "og:license": "AGPL-3.0",
    "og:github": "https://github.com/lin-snow/Ech0",
    "og:docs": "https://useech0.com/docs",
  },
};
