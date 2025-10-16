"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import TextType from "@/components/ui/texttype";

export default function HomePage() {
  const [version, setVersion] = useState("最新版本");

  useEffect(() => {
    async function fetchVersion() {
      try {
        const res = await fetch("https://api.github.com/repos/lin-snow/Ech0/tags");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setVersion(data[0].name);
        } else {
          setVersion("最新版本");
        }
      } catch (err) {
        console.error("Failed to fetch version:", err);
        setVersion("最新版本");
      }
    }
    fetchVersion();
  }, []);

  const versionUrl = version.startsWith("v")
    ? `https://github.com/lin-snow/Ech0/releases/tag/${version}`
    : undefined;

  return (
    <main className="relative flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <HeroSection
          version={version}
          versionUrl="https://github.com/lin-snow/Ech0/releases"
          title={
            <>
              <TextType
                as="span"
                className="block sm:inline text-[var(--color-fd-primary)] dark:text-white"
                text="你好,"
                loop={false}
                showCursor={false}
              />
              <TextType
                as="span"
                className="block sm:inline text-[#F43900] dark:text-white"
                text=" Ech0"
                loop={false}
                typingSpeed={45}
                initialDelay={1800}
              />
            </>
          }
          subtitle="面向个人的新一代开源、自托管、专注思想流动的轻量级联邦发布平台。"
          primaryCta={{
            text: "开始使用",
            href: "/docs",
          }}
          secondaryCta={{
            text: "在线Demo",
            href: "https://memo.vaaat.com",
          }}
          demoImageLight={{
            src: "/screenshot.png",
            alt: "Ech0 Light Mode Demo",
          }}
          demoImageDark={{
            src: "/screenshot.png",
            alt: "Ech0 Dark Mode Demo",
          }}
        />

        <Footer />
      </div>
    </main>
  );
}
