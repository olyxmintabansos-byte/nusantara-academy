import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nusantara-academy',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
