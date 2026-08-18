import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['vercel.app', 'localhost'],
  },
  experimental: {
    // এখানে কোনো experimental ফিচার যোগ করতে পারেন
  },
}

export default nextConfig