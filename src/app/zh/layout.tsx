import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/zh'>) {
  const options = baseOptions('zh');
  return (
    <HomeLayout
      {...options}
      links={[
        { text: '功能亮点', url: '/zh/#highlights' },
        { text: '能力矩阵', url: '/zh/#modules' },
        { text: '快速开始', url: '/zh/#quickstart' },
        { text: '文档', url: '/docs/' },
        { text: 'GitHub', url: 'https://github.com/lin-snow/Ech0' },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
