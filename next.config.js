/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  output: 'export', // Ensures Vercel can detect static output
  distDir: 'out',   // Tells Next.js where to put build files
};

module.exports = nextConfig;