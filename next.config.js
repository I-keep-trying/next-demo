/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
