"use client";

import { Hero } from '@/components/landing/Hero';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { DeploymentSection } from '@/components/landing/DeploymentSection';
import { Footer } from '@/components/footer';
import { Zap, Globe, Shield, PenTool } from 'lucide-react';

export default function HomePageClient() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Hero />
      
      <FeatureSection 
        title="Atomic Lightweight"
        description="Memory usage less than 15MB, image size less than 40MB. Single SQLite file storage architecture implies zero maintenance overhead."
        icon={<Zap className="w-8 h-8" />}
        imageSrc="./docs/imgs/tui.png" 
        imageAlt="Performance metrics"
      />

      <FeatureSection 
        title="Federated Universe"
        description="Native ActivityPub protocol support. Connect seamlessly with Mastodon, Misskey, and other platforms to build a decentralized ecosystem."
        icon={<Globe className="w-8 h-8" />}
        imageSrc="./docs/imgs/screenshot.png"
        imageAlt="Federation network"
        reverse
      />

      <FeatureSection 
        title="Zero-Interference Writing"
        description="Pure online Markdown editor supporting rich plugins and live preview. Focus on your thoughts without the noise of complex interfaces."
        icon={<PenTool className="w-8 h-8" />}
        // imageSrc="/writing-demo.png" // Using placeholder if image not available
        imageAlt="Writing interface"
      />

      <FeatureSection 
        title="Data Sovereignty"
        description="All content stored locally in SQLite. Support one-click export/backup via Web, TUI, or CLI. Your data is yours, always."
        icon={<Shield className="w-8 h-8" />}
        // imageSrc="/privacy-shield.png"
        imageAlt="Data privacy"
        reverse
      />

      <TestimonialsSection />

      <DeploymentSection />

      <Footer />
    </main>
  );
}
