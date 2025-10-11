import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import TextType from "@/components/ui/texttype";

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <HeroSection
        version="v2.8.0"
        title={
          <>
            <TextType
              as="span"
              className="block sm:inline text-black dark:text-white"
              textColors={[]}
              text="Open Source,"
              loop={false}
              showCursor={false}
            />{" "}
            <TextType
              as="span"
              className="block sm:inline text-black dark:text-white"
              textColors={[]}
              text="Self-hosted"
              loop={false}
              showCursor={false}
              initialDelay={900}
            />
            <TextType
              as="span"
              className="block !text-cyan-600"
              textColors={["#oklch(60.9% 0.126 221.723)"]}
              text="Your Memo, Your Way"
              loop={false}
              typingSpeed={45}
              initialDelay={1800}
              cursorClassName="text-cyan-600"
            />
          </>
        }
        subtitle="A next-generation open-source, self-hosted, lightweight federated publishing platform focused on personal idea sharing."
        primaryCta={{
          text: "Get Started",
          href: "/docs",
        }}
        secondaryCta={{
          text: "Live Demo",
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
