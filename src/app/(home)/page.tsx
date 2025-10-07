import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      
      <HeroSection
        title={
          <>
            Open Source, <span className="block sm:inline">Self-hosted</span>
            <span className="block text-teal-600">Your Memo, Your Way</span>
          </>
        }
        subtitle="A next-generation open-source, self-hosted, lightweight federated publishing platform focused on personal idea sharing."
        primaryCta={{
          text: 'Get Started',
          href: '/docs',
        }}
        secondaryCta={{
          text: 'Learn More',
          href: '/about',
        }}
        demoImageLight={{
          src: '/screenshot.png',
          alt: 'Ech0 Light Mode Demo',
        }}
        demoImageDark={{
          src: '/screenshot.png',
          alt: 'Ech0 Dark Mode Demo',
        }}
      />
     
    </main>
  );
}
