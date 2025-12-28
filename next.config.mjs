import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Cloudflare Pages优化
  skipTrailingSlashRedirect: true,
  experimental: {
    // 禁用API路由（静态部署不需要）
    appDir: false,
  },
};

export default withMDX(config);