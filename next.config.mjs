import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ 构建时忽略 ESLint 错误
  },
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
};

export default withMDX(config);
