/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Skips linting in build
  },
  typescript: {
    ignoreBuildErrors: true, // 🚀 Ignores TypeScript errors in build
  },
};

module.exports = nextConfig;
