import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

export type SiteLocale = 'en' | 'zh';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: SiteLocale = 'en'): BaseLayoutProps {
  const docsText = locale === 'zh' ? '文档' : 'Docs';

  return {
    githubUrl: 'https://github.com/lin-snow/Ech0',
    nav: {
      title: (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/logo.svg' alt='Ech0' className='inline h-6 mr-2' />
          Ech0
        </>
      ),
      children: <LanguageSwitcher locale={locale} />,
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: docsText,
        url: '/docs/',
      },
    ],
  };
}
