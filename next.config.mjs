import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
 async rewrites() {
    return [
      {
        source: '/((?!admin|api))tenant-domains/:path*',
        destination: '/tenant-domains/:tenant/:path*',
        has: [
          {
            type: 'host',
            value: '(?<tenant>.*)',
          },
        ],
      },
    ]
  },
  // Your Next.js config here
  devIndicators: {
    position: 'top-right', // Or 'bottom-left', 'top-left', 'bottom-right'
  }
}

export default withPayload(nextConfig)
