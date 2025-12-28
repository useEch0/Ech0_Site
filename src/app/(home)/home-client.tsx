"use client";

import { Hero } from '@/components/landing/Hero';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { DeploymentSection } from '@/components/landing/DeploymentSection';
import { Footer } from '@/components/footer';
import { Zap, Globe, Shield, PenTool } from 'lucide-react';
import type { HomeLocale, HomeMessages } from '@/lib/home-i18n';
import { getHomeMessages } from '@/lib/home-i18n';

export default function HomePageClient({
  locale = 'en',
  messages,
  mainLang,
}: {
  locale?: HomeLocale;
  messages?: HomeMessages;
  mainLang?: string;
}) {
  const t = messages ?? getHomeMessages(locale);

  return (
    <main className="flex flex-col min-h-screen bg-background" lang={mainLang}>
      <Hero messages={t.hero} />
      
      <FeatureSection 
        title={t.features.lightweight.title}
        description={t.features.lightweight.description}
        icon={<Zap className="w-8 h-8" />}
        imageSrc="/images/lightweight.png" 
        imageAlt={t.features.lightweight.imageAlt}
        placeholderText={t.features.visualPreviewPlaceholder}
      />

      <FeatureSection 
        title={t.features.social.title}
        description={t.features.social.description}
        icon={<Globe className="w-8 h-8" />}
        imageSrc="/images/social.png"
        imageAlt={t.features.social.imageAlt}
        placeholderText={t.features.visualPreviewPlaceholder}
        reverse
      />

      <FeatureSection 
        title={t.features.writing.title}
        description={t.features.writing.description}
        icon={<PenTool className="w-8 h-8" />}
        imageSrc="/images/editor.png"
        imageAlt={t.features.writing.imageAlt}
        placeholderText={t.features.visualPreviewPlaceholder}
      />

      <FeatureSection 
        title={t.features.sovereignty.title}
        description={t.features.sovereignty.description}
        icon={<Shield className="w-8 h-8" />}
        imageSrc="/images/datasecure.png"
        imageAlt={t.features.sovereignty.imageAlt}
        placeholderText={t.features.visualPreviewPlaceholder}
        reverse
      />

      <TestimonialsSection messages={t.testimonials} />

      <DeploymentSection messages={t.deployment} />

      <Footer locale={locale} />
    </main>
  );
}
