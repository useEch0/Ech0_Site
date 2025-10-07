import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // output: 'export',
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ 构建时忽略 ESLint 错误
  },
};

export default withMDX(config);
