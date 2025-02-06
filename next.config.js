/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Skips linting errors
  },
  typescript: {
    ignoreBuildErrors: true, // 🚀 Skips TypeScript errors
  },
  experimental: {
    logging: 'verbose', // 🚀 Enables detailed logs
  },
};

module.exports = nextConfig;
