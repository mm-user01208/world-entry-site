import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/world-entry-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
