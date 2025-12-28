import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions('en')}
      search={{
        // 使用客户端搜索（适合静态部署）
        mode: 'client',
      }}
    >
      {children}
    </DocsLayout>
  );
}