import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/zeta-manifest",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
