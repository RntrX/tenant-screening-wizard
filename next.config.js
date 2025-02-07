/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  output: "export",
  distDir: "out",
};

module.exports = nextConfig;
