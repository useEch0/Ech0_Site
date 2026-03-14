import type { Metadata } from "next";
import HomePageClient from "./home-client";

export const metadata: Metadata = {
  title: "Ech0",
  description:
    "Next-generation open-source, self-hosted, lightweight federated publishing platform.",
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
    title: "Ech0",
    description:
      "面向个人的新一代开源、自托管、专注思想流动的轻量级联邦发布平台。",
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
    title: "Ech0",
    description:
      "面向个人的新一代开源、自托管、专注思想流动的轻量级联邦发布平台。",
    images: ["/og-image.png"],
    creator: "@useEch0",
  },

  alternates: {
    canonical: "https://ech0.soopy.cn",
    languages: {
      en: "https://ech0.soopy.cn/",
      zh: "https://ech0.soopy.cn/zh/",
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

export default function Page() {
  // HomePageClient 是单独的客户端组件
  return <HomePageClient locale="en" />;
}