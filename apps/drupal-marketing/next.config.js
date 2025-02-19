/** @type {import('next').NextConfig} */
const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  transpilePackages: ['@repo/ui'],
};

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

module.exports = withVercelToolbar(nextConfig);
