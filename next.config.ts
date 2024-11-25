import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        },
    ],
  },
};

export default nextConfig;
