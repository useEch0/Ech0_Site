import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  const options = baseOptions('en');
  return (
    <HomeLayout
      {...options}
      links={[
        { text: 'Highlights', url: '/#highlights' },
        { text: 'Capability', url: '/#modules' },
        { text: 'Get Started', url: '/#quickstart' },
        { text: 'Docs', url: '/docs/' },
        { text: 'GitHub', url: 'https://github.com/lin-snow/Ech0' },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
