import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img src="/Ech0.png" alt="Ech0" width="24" height="24" className="rounded" />
        Ech0
      </>
    ),
  },
  links: [
    {
      text: "文档",
      url: "/docs",
    },
  ],
  githubUrl: "https://github.com/lin-snow/Ech0",
};
