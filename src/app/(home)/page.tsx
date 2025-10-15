import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import TextType from "@/components/ui/texttype";

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <HeroSection
          version="v2.8.1"
          title={
            <>
              <TextType
                as="span"
                // className="block sm:inline text-black dark:text-white"
                textColors={[]}
                text="你好,"
                loop={false}
                showCursor={false}
              />

              <TextType
              as="span"
              // className="block !text-cyan-600"
              // textColors={["#oklch(60.9% 0.126 221.723)"]}
              text=" Ech0"
              loop={false}
              typingSpeed={45}
              initialDelay={1800}
              // cursorClassName="text-cyan-600"
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
