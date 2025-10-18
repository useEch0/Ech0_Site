import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      search={{
        enabled: true,
        // 在静态导出模式下，使用客户端搜索
        client: {
          // 使用默认的客户端搜索
        }
      }}
    >
      {children}
    </DocsLayout>
  );
}
