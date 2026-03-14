import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

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
  const switchText = locale === 'zh' ? 'English' : 'CN';
  const switchUrl = locale === 'zh' ? '/' : '/zh/';

  return {
    githubUrl: 'https://github.com/lin-snow/Ech0',
    nav: {
      title: (
        <>
          <img src='/logo.svg' alt='Ech0' className='inline h-6 mr-2' />
          Ech0
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: docsText,
        url: '/docs/',
      },
      {
        text: switchText,
        url: switchUrl,
      },
    ],
  };
}
