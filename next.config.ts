import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d22pimhl2qmbj7.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "www.wonderla.com",
      },
    ],
  },
};

export default nextConfig;
