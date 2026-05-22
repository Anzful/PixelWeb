/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.pixelweb.ge',
          },
        ],
        destination: 'https://pixelweb.ge/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

