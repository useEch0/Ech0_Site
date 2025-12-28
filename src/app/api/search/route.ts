import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

// statically cached
export const revalidate = false;
export const { staticGET: GET } = createSearchAPI(source, {
  // 静态搜索配置
});