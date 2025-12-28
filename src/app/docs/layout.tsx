import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions('en')}
      search={{
        // 配置静态搜索客户端
        mode: 'static',
      }}
    >
      {children}
    </DocsLayout>
  );
}