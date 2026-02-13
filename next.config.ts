import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/professional-space",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
