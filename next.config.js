/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '10.119.91.17',
    '2.21.67.41',
    '192.168.*.*',
  ],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig
