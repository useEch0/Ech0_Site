import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';


/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
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
        text: '文档',
        url: '/docs',
      }
    ],
  };
}
