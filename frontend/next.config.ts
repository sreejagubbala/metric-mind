import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [],
  },

  experimental: {},

  poweredByHeader: false,
};

export default nextConfig;
